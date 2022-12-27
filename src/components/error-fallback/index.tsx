/* eslint-disable no-unused-vars */
import React from 'react';

export interface ErrorFallbackProps {
	error: Error;
	resetErrorBoundary: (...args: Array<unknown>) => void;
}

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => (
	<div role="alert">
		<p>Something went wrong:</p>
		<pre>{error?.message}</pre>
		<button type="button" onClick={resetErrorBoundary}>Try again</button>
	</div>
);
