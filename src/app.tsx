/* eslint-disable no-unused-vars */
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import { ErrorFallback } from '@components/error-fallback';
import queryClient from 'configs/react-query.config';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppLayout from 'layouts/app-layout';
import { QueryClientProvider } from '@tanstack/react-query';
import { Form } from 'demo/demo';

/* const globalStyles = <GlobalStyles />; */

const App = () => (
	<ErrorBoundary FallbackComponent={ErrorFallback}>
		<div className="App">
			<MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS>
				{/* {globalStyles} */}
				<QueryClientProvider client={queryClient}>
					{/* <AuthProvider> */}
					<AppLayout>
						<div className="App__wrapper">
							<Form />
							{/* <Sidebar />
											<div className="Right__side">
												<Header />
												<AppContent />
											</div> */}
						</div>
					</AppLayout>
					<ReactQueryDevtools initialIsOpen={false} />
					{/* </AuthProvider> */}
				</QueryClientProvider>
			</MantineProvider>
		</div>
	</ErrorBoundary>
);

export default App;
