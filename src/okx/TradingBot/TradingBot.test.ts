import { beforeEach, describe, expect, it } from 'vitest';

import { OKX } from '../OKX';
import { TradingBot } from './TradingBot';
import { TradingBotGrid } from './TradingBotGrid';

describe('TradingBot', () => {
  let okx: OKX;
  let tradingBot: TradingBot;

  beforeEach(() => {
    okx = new OKX({
      apiKey: 'apiKey',
      passphrase: 'passphrase',
      secretKey: 'secretKey',
      isDemo: true,
    });

    tradingBot = new TradingBot(okx);
  });

  it('should be construct', () => {
    expect(tradingBot).toBeDefined();
    expect(tradingBot).toBeInstanceOf(TradingBot);
    expect(tradingBot.grid).toBeInstanceOf(TradingBotGrid);
  });
});
