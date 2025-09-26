interface BaseResponse<T> {
  meta_data?: MetaData;
  data?: T;
}

interface MetaData {
  message?: string;
  code?: string;
}

export type { BaseResponse };
