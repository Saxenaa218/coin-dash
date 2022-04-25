import { StateTypes } from "./types";
import {
  SET_COINS,
  SET_DETAILS_MODAL,
  SET_DETAILS_DATA,
  SET_QUERY,
  SET_EXCHANGE_DATA,
  SET_COINS_LOADING,
  SET_EXCHANGE_DATA_LOADING,
} from "../utils";

const initialState: StateTypes = {
  coins: [],
  coinsLoading: false,
  detailsModalVisible: false,
  detailsModalData: {},
  query: "",
  exchangeData: [],
  exchangeDataLoading: false,
};

const rootReducer = (state: StateTypes = initialState, action: any) => {
  switch (action.type) {
    case SET_COINS:
      return { ...state, coins: action.payload };
    case SET_COINS_LOADING:
      return { ...state, coinsLoading: action.payload };
    case SET_DETAILS_MODAL:
      return { ...state, detailsModalVisible: action.payload };
    case SET_DETAILS_DATA:
      return { ...state, detailsModalData: action.payload };
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_EXCHANGE_DATA:
      return { ...state, exchangeData: action.payload };
    case SET_EXCHANGE_DATA_LOADING:
      return { ...state, exchangeDataLoading: action.payload };
    default:
      return { ...state };
  }
};

export default rootReducer;
