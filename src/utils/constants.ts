export const SET_COINS = "SET_COINS";
export const SET_COINS_LOADING = "SET_COINS_LOADING";
export const SET_DETAILS_MODAL = "SET_DETAILS_MODAL";
export const SET_DETAILS_DATA = "SET_DETAILS_DATA";
export const SET_QUERY = "SET_QUERY";
export const SET_EXCHANGE_DATA = "SET_EXCHANGE_DATA";
export const SET_EXCHANGE_DATA_LOADING = "SET_EXCHANGE_DATA_LOADING";

export function debounce<Params extends any[]>(
  func: (...args: Params) => any,
  timeout: number
): (...args: Params) => void {
  let timer: NodeJS.Timeout;
  return (...args: Params) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
