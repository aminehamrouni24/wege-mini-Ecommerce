'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/ProductCard';
import { SearchBar } from '@/components/SearchBar';
import { FilterSection } from '@/components/FilterSection';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const category = searchParams.get('category') || 'all';
  const priceRange = searchParams.get('price') || 'all';
  const search = searchParams.get('search') || '';

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const updateURL = useCallback((updates: Record<string, string>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'all' && value !== '') {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`?${params.toString()}`, { scroll: false });
  }, [searchParams, router]);

  const handleCategoryChange = (newCategory: string) => {
    updateURL({ category: newCategory, price: priceRange, search });
  };

  const handlePriceRangeChange = (newPriceRange: string) => {
    updateURL({ category, price: newPriceRange, search });
  };

  const handleSearchChange = (newSearch: string) => {
    updateURL({ category, price: priceRange, search: newSearch });
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'all' || product.category === category;

    const matchesPriceRange =
      priceRange === 'all' ||
      (priceRange === 'under50' && product.price < 50) ||
      (priceRange === '50to100' && product.price >= 50 && product.price <= 100) ||
      (priceRange === 'over100' && product.price > 100);

    const matchesSearch =
      search === '' ||
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesPriceRange && matchesSearch;
  });

  const categories = Array.from(new Set(products.map((p) => p.category)));

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <div className="text-lg dark:text-white">Loading products...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Shop All Products</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <div className="mb-6">
            <SearchBar
              value={search}
              onChange={handleSearchChange}
              placeholder="Search products..."
            />
          </div>

          <FilterSection
            categories={categories}
            selectedCategory={category}
            selectedPriceRange={priceRange}
            onCategoryChange={handleCategoryChange}
            onPriceRangeChange={handlePriceRangeChange}
          />
        </aside>

        <div className="lg:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No products found matching your criteria.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
