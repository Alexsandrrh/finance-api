/**
 * @description Ответ от сервера OKX.
 * */
export interface OKXResponse<D = unknown> {
  /**
   * @description Код ответа.
   * */
  code: string;

  /**
   * @description Данные ответа.
   * */
  data: D;

  /**
   * @description Сообщение ответа.
   * */
  msg: string;
}
