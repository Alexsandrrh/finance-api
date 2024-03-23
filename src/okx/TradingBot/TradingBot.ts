import { OKX } from '../OKX';
import { TradingBotGrid } from './TradingBotGrid';

/**
 * @description Трейдинговый бот.
 * */
export class TradingBot {
  /**
   * @description Сеточный трейдинговый бот.
   * */
  readonly grid: TradingBotGrid;

  constructor(private readonly okx: OKX) {
    this.grid = new TradingBotGrid(okx);
  }
}
