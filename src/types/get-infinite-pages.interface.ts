export interface GetInfinitePagesInterface<T> {
	next?: string;
	previous?: number;
	results: T[];
	count: number;
}
