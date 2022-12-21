import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const giveAwayPetSlice = createSlice({
  name: "giveAwayPet",
  initialState,
  reducers: {
    giveAwayPetPending: (state) => {
      state.isLoading = true;
    },
    giveAwayPetSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    giveAwayPetError: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

const { reducer, actions } = giveAwayPetSlice;

export const { giveAwayPetPending, giveAwayPetSuccess, giveAwayPetError } =
  actions;

export default reducer;
