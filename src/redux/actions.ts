import axios from "axios";
import { store } from ".";
import {
  SET_COINS,
  SET_COINS_LOADING,
  SET_DETAILS_DATA,
  SET_DETAILS_MODAL,
  SET_EXCHANGE_DATA,
  SET_EXCHANGE_DATA_LOADING,
  SET_QUERY,
} from "../utils";

export const fetchCoins = async () => {
  coinsLoading(true);
  const result = await axios.get(
    "https://api.coinlore.net/api/tickers/?start=100&limit=100"
  );
  store.dispatch({
    type: SET_COINS,
    payload: result.data.data,
  });
  coinsLoading(false);
};

export const coinsLoading = (bool: boolean) => {
  store.dispatch({
    type: SET_COINS_LOADING,
    payload: bool,
  });
};

export const setDetailsModal = (bool: boolean) => {
  store.dispatch({
    type: SET_DETAILS_MODAL,
    payload: bool,
  });
};

export const setDetailsData = (obj: object) => {
  store.dispatch({
    type: SET_DETAILS_DATA,
    payload: obj,
  });
};

export const setQuery = (query: string) => {
  store.dispatch({
    type: SET_QUERY,
    payload: query,
  });
};

export const getOtherExchangeData = async (id: string) => {
  exchangeDataLoading(true);
  store.dispatch({
    type: SET_DETAILS_MODAL,
    payload: true,
  });
  const result = await axios(
    `https://api.coinlore.net/api/coin/markets/?id=${id}`
  );
  store.dispatch({
    type: SET_EXCHANGE_DATA,
    payload: result.data,
  });
  exchangeDataLoading(false);
};

export const exchangeDataLoading = (bool: boolean) => {
  store.dispatch({
    type: SET_EXCHANGE_DATA_LOADING,
    payload: bool,
  });
};
