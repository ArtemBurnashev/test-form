import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			suspense: true,
			keepPreviousData: true,
		},
	},
});

export default queryClient;
