import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRouter, RouterProvider,  } from "@tanstack/react-router";
import { TanStackRouterDevelopmentTools } from "./components/utils/development-tools/TanStackRouterDevelopmentTools";
import { routeTree } from "./routeTree.gen.ts";
import { buildProvidersTree } from "./hooks/buildProviderTree.tsx";

const queryClient = new QueryClient();
const router = createRouter({ routeTree });

export const App = buildProvidersTree([
	[QueryClientProvider, { client: queryClient }],
	[RouterProvider, { router }],
	[ReactQueryDevtools, { initialIsOpen: false }],
	[TanStackRouterDevelopmentTools, { initialIsOpen: false, position: "bottom-right", router }],
  ]);
