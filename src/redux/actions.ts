import axios from "axios";
import { store } from ".";
import { SET_COINS } from "../utils";

export const fetchCoins = async () => {
  const result = await axios.get(
    "https://api.coinlore.net/api/tickers/?start=100&limit=100"
  );
  store.dispatch({
    type: SET_COINS,
    payload: result.data.data,
  });
};
