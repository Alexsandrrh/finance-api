import { OKX } from '../../OKX';
import { OKXResponse } from '../../types';
import {
  GetOrdersAlgoPendingData,
  GetOrdersAlgoPendingParams,
  GetSubOrdersData,
  GetSubOrdersParams,
} from './types';

/**
 * @description Сеточный трейдинговый бот.
 * */
export class TradingBotGrid {
  constructor(private readonly okx: OKX) {}

  readonly getOrdersAlgoPending = (params: GetOrdersAlgoPendingParams) =>
    this.okx.instance.get<OKXResponse<GetOrdersAlgoPendingData>>(
      '/api/v5/tradingBot/grid/orders-algo-pending',
      {
        params,
      },
    );

  readonly getSubOrders = (params: GetSubOrdersParams) =>
    this.okx.instance.get<OKXResponse<GetSubOrdersData>>(
      '/api/v5/tradingBot/grid/sub-orders',
      { params },
    );
}
