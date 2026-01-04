"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="h-full transition-all hover:shadow-lg dark:hover:shadow-gray-700">
        <CardContent className="p-4">
          <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover transition-transform hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 dark:text-white">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            {product.category}
          </p>
          <p className="text-xl font-bold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button onClick={handleAddToCart} className="w-full" size="sm">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
