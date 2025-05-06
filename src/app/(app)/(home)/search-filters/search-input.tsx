import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";

type Props = {
  disabled?: boolean;
};

const SearchInput = ({ disabled }: Props) => {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="relative w-full">
        <SearchIcon className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-500" />
        <Input className="pl-8" placeholder="Search products" disabled={disabled} />
      </div>
    </div>
  );
};

export default SearchInput;
