import axios, { AxiosInstance } from 'axios';
import CryptoJS from 'crypto-js';
import qs from 'qs';
import urlJoin from 'url-join';

import { TradingBot } from './TradingBot';
import { OKXConfig } from './types';

export class OKX {
  /**
   * @description Домен сервиса.
   * */
  readonly domain = 'https://www.okx.com';

  /**
   * @description Настроенная конфигурация axios для запросов.
   * */
  readonly instance: AxiosInstance;

  /**
   * @description Трейдинговый бот.
   * */
  readonly tradingBot: TradingBot;

  constructor({
    apiKey,
    passphrase,
    secretKey,
    isDemo,
    version = 'v5',
  }: OKXConfig) {
    this.instance = axios.create({
      baseURL: urlJoin(this.domain, 'api', version),
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
                urlJoin('api', version, config.url),
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
