'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { CategoriesGetMany } from '@/modules/categories/server/types';

type Props = {
  category: CategoriesGetMany[1];
  isActive?: boolean;
  isNavigationHovered?: boolean;
};

const CategoryDropdown = ({ category, isActive }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {category.subcategories?.length ? (
        <DropdownMenu onOpenChange={setIsOpen} modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant={isActive ? 'outline' : isOpen ? 'secondary' : 'ghost'}>
              {category.name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" sideOffset={10} className="border-secondary">
            {category.subcategories.map((subcategory) => (
              <DropdownMenuItem key={subcategory.id} className="cursor-pointer" asChild>
                <Link href={subcategory.slug} className="underline">
                  {subcategory.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant={isActive ? 'outline' : 'ghost'}>{category.name}</Button>
      )}
    </>
  );
};

export default CategoryDropdown;
