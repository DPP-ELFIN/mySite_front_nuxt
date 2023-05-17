/** @format */

import MyRequest from "./index";

/**
 *  开发进度
 *
 */
// 获取需求
export const getDemandApi = (data: any) => MyRequest.get<Response>("/demand/getDemand", data, { headers: { device: "front" } });
// 修改状态
export const editStatusApi = (data: any) => MyRequest.post("/demand/editStatus", data, { headers: { device: "front" } });
