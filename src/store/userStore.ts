import { create } from "zustand";

type Store = {
  userData: any[];
  updateUserData: any;
};

const userStore = create<Store>((set) => ({
  userData: [],
  updateUserData: (userData: any) =>
    set((state: any) => ({ userData: [...state.userData, userData] })),
}));

export default userStore;
