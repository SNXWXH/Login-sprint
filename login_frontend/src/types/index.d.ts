export interface RegisterType {
  email?: string;
  password?: string;
  personalInfo?: string;
}

export interface LoginType {
  email?: string;
  password?: string;
  remember?: boolean;
}
