import React, { Suspense } from 'react';
import { LoaderProps } from './types';

export const Loader: React.FC<LoaderProps> = ({ children }) => (
	<Suspense
		fallback={
			<div>...Loading</div>
		}
	>
		{children}
	</Suspense>
);
