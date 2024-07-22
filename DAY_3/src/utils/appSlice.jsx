import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    searchQuery: "",  // Added searchQuery to the initial state
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setSearchQuery: (state, action) => {  // Added setSearchQuery reducer
      state.searchQuery = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, setSearchQuery } = appSlice.actions;
export default appSlice.reducer;
