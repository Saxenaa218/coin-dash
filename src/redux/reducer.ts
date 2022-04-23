import { StateTypes } from "./types";
import { SET_COINS } from "../utils";

const initialState: StateTypes = {
  coins: [],
};

const rootReducer = (state: StateTypes = initialState, action: any) => {
  switch (action.type) {
    case SET_COINS:
      return { ...state, coins: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
