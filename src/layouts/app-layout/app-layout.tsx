import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { BaseLayoutProps } from './types';
import { Loader } from '../../components/loaders/main-loader';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../../components/error-fallback';

const AppLayout: FC<BaseLayoutProps> = ({ children }) => (
	<div>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Loader>
				<>{children || <Outlet />}</>
			</Loader>
		</ErrorBoundary>
	</div>
);

export default AppLayout;
