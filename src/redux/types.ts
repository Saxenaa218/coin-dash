export interface StateTypes {
  coins: object[];
  coinsLoading: boolean;
  detailsModalVisible: boolean;
  detailsModalData: any;
  query: string;
  exchangeData: any;
  exchangeDataLoading: boolean;
}

export interface actionTypes {
  type: string;
  payload: any;
}

export type DispatchType = (e: actionTypes) => void;
