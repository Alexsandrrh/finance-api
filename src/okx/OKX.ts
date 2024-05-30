import axios from 'axios';
import CryptoJS from 'crypto-js';
import qs from 'qs';

import { Base } from '../Base';
import { TradingBot } from './TradingBot';
import { OKXConfig } from './types';

export class OKX extends Base {
  /**
   * @description Трейдинговый бот.
   * */
  readonly tradingBot: TradingBot;

  constructor({ apiKey, passphrase, secretKey, isDemo }: OKXConfig) {
    super();

    this.instance = axios.create({
      baseURL: 'https://www.okx.com',
      headers: {
        'OK-ACCESS-KEY': apiKey,
        'OK-ACCESS-PASSPHRASE': passphrase,
      },
    });

    this.instance.interceptors.request.use((config) => {
      const timestamp = new Date().toISOString();

      if (isDemo) config.headers.set('x-simulated-trading', 1);

      config.headers.set('OK-ACCESS-TIMESTAMP', timestamp);
      config.headers.set(
        'OK-ACCESS-SIGN',
        CryptoJS.enc.Base64.stringify(
          CryptoJS.HmacSHA256(
            timestamp +
              config.method?.toUpperCase() +
              [
                config.url,
                qs.stringify(config.params, { arrayFormat: 'brackets' }),
              ]
                .filter(Boolean)
                .join('?'),
            secretKey,
          ),
        ),
      );

      return config;
    });

    // Инициализация подмодулей.
    this.tradingBot = new TradingBot(this);
  }
}
