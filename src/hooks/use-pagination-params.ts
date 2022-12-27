import React from 'react';
import { IPagination } from './use-pagination';

export const usePaginationParams = () => {
	const [paginationParams, setState] = React.useState<IPagination>({
		page: 1,
		page_size: 10,
	});

	const setPaginationParams = (params: IPagination) => {
		setState(params);
	};

	return {
		paginationParams,
		setPaginationParams,
	};
};
