'use client';

import { useState } from 'react';

import type { CategoriesGetMany } from '@/modules/categories/server/types';
import CategoryDropdown from './category-dropdown';

type Props = {
  data: CategoriesGetMany;
};

const Categories = ({ data }: Props) => {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="flex flex-wrap gap-2">
      {data.map((category) => (
        <CategoryDropdown
          key={category.id}
          category={category}
          isActive={activeCategory === category.slug}
          isNavigationHovered={false}
        />
      ))}
    </div>
  );
};

export default Categories;
