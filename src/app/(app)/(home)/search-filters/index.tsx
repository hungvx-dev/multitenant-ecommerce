"use client";

import { Suspense } from "react";

import { useSuspenseQuery } from "@tanstack/react-query";

import { useTRPC } from "@/trpc/client";

import Catagories from "./categories";
import SearchInput from "./search-input";

const SearchFilters = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  return (
    <div className="flex w-full flex-col gap-4 border-b px-4 py-8 lg:px-12">
      <SearchInput />
      <Suspense fallback={<div className="h-10" />}>
        <Catagories data={data} />
      </Suspense>
    </div>
  );
};

export default SearchFilters;
