import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const adoptPetSlice = createSlice({
  name: "adoptPet",
  initialState,
  reducers: {
    adoptPetPending: (state) => {
      state.isLoading = true;
    },
    adoptPetSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    adoptPetError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = adoptPetSlice;

export const { adoptPetPending, adoptPetSuccess, adoptPetError } = actions;

export default reducer;
