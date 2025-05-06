"use client";
import { useTRPC } from "@/trpc/client";
import Catagories from "./categories";
import SearchInput from "./search-input";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";

const SearchFilters = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.categories.getMany.queryOptions());

  return (
    <div className="px-4 lg:px-12 py-8 flex flex-col border-b gap-4 w-full">
      <SearchInput />
      <Suspense fallback={<div className="h-10" />}>
        <Catagories data={data} />
      </Suspense>
    </div>
  );
};

export default SearchFilters;
