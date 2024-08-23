export interface IResponse<T> {
  total: number;
  skip: number;
  limit: number;
  [data: string]: T[] | number;
}
