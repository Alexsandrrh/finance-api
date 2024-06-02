import axios from 'axios';

import { Base } from '../Base';

export class CoinGecko extends Base {
  constructor() {
    super();

    this.instance = axios.create({
      baseURL: 'http://api.coingecko.com/api',
    });
  }

  readonly ping = () => this.instance.get('/ping');
}
