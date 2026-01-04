import { describe, it, expect } from 'vitest';
import { products } from '@/lib/products';

describe('Product Data', () => {
  it('should have at least 10 products', () => {
    expect(products.length).toBeGreaterThanOrEqual(10);
  });

  it('should have all required fields for each product', () => {
    products.forEach((product) => {
      expect(product).toHaveProperty('id');
      expect(product).toHaveProperty('title');
      expect(product).toHaveProperty('price');
      expect(product).toHaveProperty('category');
      expect(product).toHaveProperty('image');
      expect(product).toHaveProperty('description');
    });
  });

  it('should have valid price values', () => {
    products.forEach((product) => {
      expect(product.price).toBeGreaterThan(0);
      expect(typeof product.price).toBe('number');
    });
  });
});
