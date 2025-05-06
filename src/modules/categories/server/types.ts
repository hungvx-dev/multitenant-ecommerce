import { AppRouter } from "@/trpc/routers/_app";
import type { inferRouterOutputs } from "@trpc/server";

export type CategoriesGetMany =
  inferRouterOutputs<AppRouter>["categories"]["getMany"];
