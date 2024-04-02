import { AlgoOrdType } from './AlgoOrdType';

export interface GetSubOrdersDataItem {
  accFillSz: string;
  algoClOrdId: string;
  algoId: string;
  algoOrdType: AlgoOrdType;
  avgPx: string;
  cTime: string;
  ccy: string;
  ctVal: string;
  fee: string;
  feeCcy: string;
  groupId: string;
  instId: string;
  instType: string;
  lever: string;
  ordId: string;
  ordType: string;
  pnl: string;
  posSide: string;
  px: string;
  rebate: string;
  rebateCcy: string;
  side: string;
  state: string;
  sz: string;
  tag: string;
  tdMode: string;
  uTime: string;
}
