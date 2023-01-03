import axios from "axios";
import {
  adoptPetPending,
  adoptPetSuccess,
  adoptPetError,
} from "../slices/adoptPetSlice";

const adoptPetURL = `${process.env.REACT_APP_API_URL}`;

export const adoptPet = (adoptPetData) => async (dispatch) => {
  dispatch(adoptPetPending());
  try {
    const result = await axios.post(
      `${adoptPetURL}/adopt-pet`,
      adoptPetData
    );
    result.data.status === "success"
      ? dispatch(adoptPetSuccess(result.data.message))
      : dispatch(adoptPetError(result.data.message));
  } catch (error) {
    dispatch(adoptPetError(error.message));
  }
};
