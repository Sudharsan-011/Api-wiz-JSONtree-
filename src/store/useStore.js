import { create } from "zustand";

export const useStore = create((set) => ({
  jsonData: {},
  setJsonData: (data) => set({ jsonData: data }),
  theme: "light",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));
