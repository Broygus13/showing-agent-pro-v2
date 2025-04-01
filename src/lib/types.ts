export type UserRole = 'scheduling' | 'showing';

export interface UserData {
  uid: string;
  email: string;
  name: string;
  role: UserRole;
  brokerage: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthState {
  isLoading: boolean;
  error?: string;
  user?: UserData | null;
} 