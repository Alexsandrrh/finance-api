import { AlgoOrdType } from './AlgoOrdType';
import { InstType } from './InstType';

export interface GetOrdersAlgoPendingParams {
  algoOrdType: AlgoOrdType;
  algoId?: string;
  instId?: string;
  instType?: InstType;
  after?: string;
  before?: string;
  limit?: string;
}
