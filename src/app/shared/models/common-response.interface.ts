export interface CommonResponse<T> {
  limit: number;
  offset: number;
  result: T;
}
