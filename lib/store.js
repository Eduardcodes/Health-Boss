import { create } from 'zustand';

export const useAuthStore = create ((set) => ({
    auth: null,
    setAuth: (token) => set(({ auth: token })),
    removeAuth: () => set({ auth: null }),
}));