import { create } from 'zustand';

type State = {
  status: 'idle' | 'isAuthenticated' | 'logout';
  token?: string;
  user?: {
    name: string;
    email: string;
  };
};

type Actions = {
  login: (email: string, password: string) => void;
  logout: () => void;
};

const INITIAL_STATE: State = {
  status: 'idle',
  token: '',
};

export const useAuthStore = create<State & Actions>((set) => ({
  ...INITIAL_STATE,
  login: (email: string, password: string) => {
    set({
      status: 'isAuthenticated',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      user: {
        name: 'John Doe',
        email,
      },
    });
  },
  logout: () => {
    set({ ...INITIAL_STATE, status: 'logout' });
  },
}));
