/** @format */

declare interface Response {
  code?: number | string;
  data: any;
  msg: string;
  [key: string]: any;
}
