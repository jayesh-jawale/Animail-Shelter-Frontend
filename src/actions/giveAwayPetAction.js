import axios from "axios";
import {
  giveAwayPetPending,
  giveAwayPetSuccess,
  giveAwayPetError,
} from "../slices/giveAwayPetSlice";

const giveAwayPetUrl = `${process.env.REACT_APP_API_URL}`

export const giveAwayPet = (givePetData) => async (dispatch) => {
  dispatch(giveAwayPetPending());
  try {
    const result = await axios.post(
      giveAwayPetUrl + "/give-pet",
      givePetData
    );
    result.data.status === "success"
      ? dispatch(giveAwayPetSuccess(result.data.message))
      : dispatch(giveAwayPetError(result.data.message));
  } catch (error) {
    dispatch(giveAwayPetError(error.message));
  }
};
