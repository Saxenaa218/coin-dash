export interface StateTypes {
  coins: object[];
}

export interface actionTypes {
  type: string;
  payload: any;
}

export type DispatchType = (e: actionTypes) => void;
