import axios from "axios";
import {
  getPetsLoading,
  getPetsSuccess,
  getPetsFail,
} from "../slices/getPetSlice";

const getPetURL = `${process.env.REACT_APP_API_URL}`;

export const getPet = () => async (dispatch) => {
  dispatch(getPetsLoading());
  try {
    const result = await axios.get(`${getPetURL}/get-pets`);
    dispatch(getPetsSuccess(result.data.result));
  } catch (error) {
    dispatch(getPetsFail(error.message));
  }
};
