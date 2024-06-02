import { beforeEach, describe, expect, it } from 'vitest';

import { Base } from '../Base';
import { OKX } from './OKX';
import { TradingBot } from './TradingBot';

describe('OKX', () => {
  let okx: OKX;

  beforeEach(() => {
    okx = new OKX({
      apiKey: 'apiKey',
      passphrase: 'passphrase',
      secretKey: 'secretKey',
      isDemo: true,
    });
  });

  it('should be construct', () => {
    expect(okx).toBeDefined();
    expect(okx).toBeInstanceOf(Base);
    expect(okx).toBeInstanceOf(OKX);
    expect(okx.tradingBot).toBeInstanceOf(TradingBot);
  });
});
