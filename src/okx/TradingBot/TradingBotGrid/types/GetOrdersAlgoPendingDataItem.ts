import { AlgoOrdType } from './AlgoOrdType';

export interface GetOrdersAlgoPendingDataItem {
  algoId: string;
  algoClOrdId: string;
  instType: string;
  instId: string;
  cTime: string;
  uTime: string;
  algoOrdType: AlgoOrdType;
  state: 'starting' | 'running' | 'stopping' | 'no_close_position';
  rebateTrans: [];
  rebate: string;
  rebateCcy: string;
  triggerParams: [];
  triggerAction: 'start' | 'stop';
  triggerStrategy: 'instant' | 'price' | 'rsi';
  delaySeconds: string;
  triggerTime: string;
  triggerType: 'manual' | 'auto';
  timeframe: string;
  thold: string;
  triggerCond: 'cross_up' | 'cross_down' | 'above' | 'below' | 'cross';
  timePeriod: string;
  triggerPx: string;
  stopType: string;
  maxPx: string;
  minPx: string;
  gridProfit: string;
  floatProfit: string;
  investment: string;
}
