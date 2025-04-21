// store.js
import create from "zustand";

export const useSidebarStore = create((set) => ({
  isSideNavbarOpen: false,
  toggleSideNavbar: () =>
    set((state) => ({ isSideNavbarOpen: !state.isSideNavbarOpen })),
  closeSideNavbar: () => set({ isSideNavbarOpen: false }),
}));
