import axios, { AxiosInstance } from 'axios';

/**
 * @description База для API.
 * */
export class Base {
  /**
   * @description Настроенная конфигурация axios для запросов.
   * */
  protected instance: AxiosInstance = axios.create();
}
