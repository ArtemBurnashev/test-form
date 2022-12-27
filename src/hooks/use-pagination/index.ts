import { useEffect, useReducer, useState } from 'react';
/* import { PaginationChangedEvent, SortChangedEvent } from 'ag-grid-community'; */
import { useImmer } from 'use-immer';

interface IPaginationProps {
	
	onChange?: (params: IPagination) => void;
}

export interface IPagination {
	page: number;
	ordering?: string;
	page_size: number;
	search?: string;
}

const initialState: IPagination = {
	page: 1,
	page_size: 10,
};

export type PaginationReturnType = ReturnType<typeof usePagination>;

export const usePagination = (props: IPaginationProps) => {
	const [pagination, setPagination] = useImmer(initialState);

	useEffect(() => {
		props?.onChange(pagination);
	}, [pagination]);

	const setPage = (page: number) => {
		setPagination(draft => {
			draft.page = page;
		});
	};

	const setPageSize = (pageSize: number) => {
		setPagination(draft => {
			draft.page_size = pageSize;
			draft.page = 1
		});
	};

	const onSortChanged = (data: any) => {
		const columns = data.columnApi.getColumnState();

		const sortedColumns = columns.filter(v => !!v.sort);

		const formattedColumns = sortedColumns.map(v => {
			const sign = v.sort === 'asc' ? '' : '-';
			return `${sign}${v.colId}`;
		});

		const formattedQuery = formattedColumns.join(',');

		setPagination(prev => { prev.ordering = formattedQuery });
	};

	return {
		count: props.count,
		setPage,
		setPageSize,
		onSortChanged,
		queryParams: pagination,
		...pagination,
	};
};
