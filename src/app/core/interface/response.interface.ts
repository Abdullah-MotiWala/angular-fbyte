export interface IResponse<T> {
  meta: { status: number };
  data?: T;
  success: boolean;
  message?: string;
}

export interface IDeleteResponse {
  meta: { status: number };
  message: string;
  success: boolean;
}
