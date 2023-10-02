export interface SignupRequest {
  email: string;
  password: string;
}

export interface SignupResponse {
  status: number;
  data: {
    message: string;
  };
}
