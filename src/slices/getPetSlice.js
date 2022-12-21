import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pets: [],
  isLoading: false,
  error: "",
};

const getPetSlice = createSlice({
  name: "getPets",
  initialState,
  reducers: {
    getPetsLoading: (state) => {
      state.isLoading = true;
    },
    getPetsSuccess: (state, action) => {
      state.pets = action.payload;
      state.isLoading = false;
    },
    getPetsFail: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = getPetSlice;

export const { getPetsLoading, getPetsSuccess, getPetsFail } = actions;

export default reducer;
