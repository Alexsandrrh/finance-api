import { AlgoOrdType } from './AlgoOrdType';

export interface GetSubOrdersParams {
  algoOrdType: AlgoOrdType;
  algoId: string;
  type: 'live' | 'filled';
  groupId?: string;
  after?: string;
  before?: string;
  limit?: string;
}
