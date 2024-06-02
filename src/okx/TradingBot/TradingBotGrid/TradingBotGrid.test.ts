import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { beforeEach, describe, expect, it } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { OKX } from '../../OKX';
import { OKXResponse } from '../../types';
import { TradingBotGrid } from './TradingBotGrid';
import {
  GetOrderDetailsParams,
  GetOrdersAlgoPendingData,
  GetOrdersAlgoPendingParams,
  GetSubOrdersData,
  GetSubOrdersParams,
} from './types';

describe('TradingBotGrid', () => {
  let mockAdapter: MockAdapter;

  let okx: OKX;
  let tradingBotGrid: TradingBotGrid;

  beforeEach(() => {
    mockAdapter = new MockAdapter(axios);

    okx = new OKX({
      apiKey: 'apiKey',
      passphrase: 'passphrase',
      secretKey: 'secretKey',
      isDemo: true,
    });

    tradingBotGrid = new TradingBotGrid(okx);
  });

  it('should be construct', () => {
    expect(tradingBotGrid).toBeDefined();
    expect(tradingBotGrid).toBeInstanceOf(TradingBotGrid);
  });

  describe('Methods', () => {
    it('getOrdersAlgoPending', async () => {
      const params = mock<GetOrdersAlgoPendingParams>();
      const data = mock<OKXResponse<GetOrdersAlgoPendingData>>();

      mockAdapter
        .onGet('/api/v5/tradingBot/grid/orders-algo-pending')
        .reply(200, data);

      const result = await tradingBotGrid.getOrdersAlgoPending(params);

      expect(result.data).toEqual(data);
    });

    it('getSubOrders', async () => {
      const params = mock<GetSubOrdersParams>();
      const data = mock<OKXResponse<GetSubOrdersData>>();

      mockAdapter.onGet('/api/v5/tradingBot/grid/sub-orders').reply(200, data);

      const result = await tradingBotGrid.getSubOrders(params);

      expect(result.data).toEqual(data);
    });

    it('getOrderDetails', async () => {
      const params = mock<GetOrderDetailsParams>();
      const data = mock<OKXResponse<unknown>>();

      mockAdapter
        .onGet('/api/v5/tradingBot/grid/orders-algo-details')
        .reply(200, data);

      const result = await tradingBotGrid.getOrderDetails(params);

      expect(result.data).toEqual(data);
    });
  });
});
