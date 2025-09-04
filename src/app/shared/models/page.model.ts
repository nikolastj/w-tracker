export interface Page {
  page?: number;
  pageSize?: number;
  fromDate?: string;
  toDate?: string;
}
export interface PageResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
