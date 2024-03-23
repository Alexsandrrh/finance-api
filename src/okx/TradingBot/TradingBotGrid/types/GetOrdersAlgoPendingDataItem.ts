export interface GetOrdersAlgoPendingDataItem {
  algoId: string;
  instId: string;
  instType: string;
  state: 'starting' | 'running' | 'stopping' | 'no_close_position';
  gridProfit: string;
  floatProfit: string;
  investment: string;
}
