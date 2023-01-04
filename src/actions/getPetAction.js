import axios from "axios";
import {
  getPetsLoading,
  getPetsSuccess,
  getPetsFail,
} from "../slices/getPetSlice";

export const getPet = () => async (dispatch) => {
  dispatch(getPetsLoading());
  try {
    const result = await axios.get(
      "https://animal-shelter-backend.vercel.app/get-pets"
    );
    dispatch(getPetsSuccess(result.data.result));
  } catch (error) {
    dispatch(getPetsFail(error.message));
  }
};
