export interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  bio?: string;
  token: string;
}

export interface RegisterRequest {
  user: {
    firstName: string;
    lastName: string;
    username: string;
    bio: string;
    password: string;
    email: string;
    registerCode: string;
  };
}

export interface RegisterResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
