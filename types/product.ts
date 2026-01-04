export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterState {
  category: string;
  priceRange: string;
  searchQuery: string;
}

export type PriceRange = 'all' | 'under50' | '50to100' | 'over100';
