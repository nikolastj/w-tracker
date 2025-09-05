export interface Page {
  page?: number;
  pageSize?: number;
  fromDate?: string | Date;
  toDate?: string | Date;
}
export interface PageResponse<T> {
  data: T[];
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}
