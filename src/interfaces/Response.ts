export interface PaginationResponse<T> {
  total: number;
  items: T[];
}

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  accessTokenExpireAt: string;
  refreshTokenExpireAt: string;
}
