import {configureStore} from "@reduxjs/toolkit";

import adoptPetReducer from "./slices/adoptPetSlice"
import getPetReducer from "./slices/getPetSlice"
import giveAwayPetReducer from "./slices/giveAwayPetSlice"

const store = configureStore({
    reducer: {
        adoptPet: adoptPetReducer,
        getPet: getPetReducer,
        giveAwayPet: giveAwayPetReducer
    }
})

export default store;