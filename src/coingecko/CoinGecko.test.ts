import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { beforeEach, describe, expect, it } from 'vitest';

import { CoinGecko } from './CoinGecko';

describe('CoinGecko', () => {
  let mockAdapter: MockAdapter;

  let coinGecko: CoinGecko;

  beforeEach(() => {
    mockAdapter = new MockAdapter(axios);

    coinGecko = new CoinGecko();
  });

  it('should be construct', () => {
    expect(coinGecko).toBeDefined();
    expect(coinGecko).toBeInstanceOf(CoinGecko);
  });

  describe('Methods', () => {
    it('ping', async () => {
      mockAdapter.onGet('/ping').reply(200);

      const result = await coinGecko.ping();

      expect(result.status).toEqual(200);
    });
  });
});
