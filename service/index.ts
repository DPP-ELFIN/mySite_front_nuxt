/** @format */

import { AsyncData, UseFetchOptions } from "nuxt/dist/app/composables";

const BASE_URL = "http://127.0.0.1:3333/api";

type Methods = "get" | "post" | "delete";

class MyRequest {
  private request<T = any>(url: string, methods: Methods, data?: any, options?: UseFetchOptions<T>): Promise<AsyncData<T, Error>> {
    const newOptions: UseFetchOptions<T> = {
      baseURL: BASE_URL,
      method: methods,
      ...options,
      headers: {
        token: "",
        ...options?.headers,
      },
    };
    if (methods === "get" || methods === "delete") {
      newOptions.query = data;
    }
    if (methods === "post") {
      newOptions.body = data;
    }

    return new Promise((resolve, reject) => {
      console.log(newOptions.body);
      useFetch(url, newOptions)
        .then((res) => {
          // res => data:T , refresh, pendding,error , ...
          resolve(res as AsyncData<T, Error>);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request(url, "get", params, options);
  }
  delete<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request(url, "delete", params, options);
  }
  post<T = any>(url: string, data?: any, options?: UseFetchOptions<T>) {
    return this.request(url, "post", data, options);
  }
}

export default new MyRequest();
