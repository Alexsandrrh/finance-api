import axios, { AxiosInstance } from 'axios';

/**
 * @description База для API.
 * */
export class Base {
  /**
   * @description Настроенная конфигурация axios для запросов.
   * */
  instance: AxiosInstance = axios.create();
}
