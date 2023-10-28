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

export interface FieldType {
  email?: string;
  password?: string;
  personalInfo?: string;
}
