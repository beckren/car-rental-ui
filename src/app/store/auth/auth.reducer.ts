import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from './auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token }) => ({
    ...state,
    isAuthenticated: true,
    token,
  })),
  on(logout, () => initialState)
);
