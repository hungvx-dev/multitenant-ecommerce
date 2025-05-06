import { HydrateClient, prefetch, trpc } from "@/trpc/server";

import { Footer } from "./footer";
import { Navbar } from "./navbar";
import SearchFilters from "./search-filters";

type Props = {
  children: React.ReactNode;
};

async function Layout({ children }: Props) {
  prefetch(trpc.categories.getMany.queryOptions());

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <HydrateClient>
        <SearchFilters />
      </HydrateClient>
      <div className="flex-1 bg-[#f4f4f0]">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
