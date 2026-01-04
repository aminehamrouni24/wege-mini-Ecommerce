"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FilterSectionProps {
  categories: string[];
  selectedCategory: string;
  selectedPriceRange: string;
  onCategoryChange: (category: string) => void;
  onPriceRangeChange: (range: string) => void;
}

export function FilterSection({
  categories,
  selectedCategory,
  selectedPriceRange,
  onCategoryChange,
  onPriceRangeChange,
}: FilterSectionProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Category</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={selectedCategory} onValueChange={onCategoryChange}>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="all" id="cat-all" />
              <Label htmlFor="cat-all" className="cursor-pointer">
                All Categories
              </Label>
            </div>
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2 mb-3">
                <RadioGroupItem value={category} id={`cat-${category}`} />
                <Label htmlFor={`cat-${category}`} className="cursor-pointer">
                  {category}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedPriceRange}
            onValueChange={onPriceRangeChange}
          >
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="all" id="price-all" />
              <Label htmlFor="price-all" className="cursor-pointer">
                All Prices
              </Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="under50" id="price-under50" />
              <Label htmlFor="price-under50" className="cursor-pointer">
                Under $50
              </Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="50to100" id="price-50to100" />
              <Label htmlFor="price-50to100" className="cursor-pointer">
                $50 - $100
              </Label>
            </div>
            <div className="flex items-center space-x-2 mb-3">
              <RadioGroupItem value="over100" id="price-over100" />
              <Label htmlFor="price-over100" className="cursor-pointer">
                Over $100
              </Label>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>
    </div>
  );
}
