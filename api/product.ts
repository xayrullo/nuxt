const { $axios } = useNuxtApp();

import type { AxiosInstance } from "axios";
import type { IResponse } from "~/types";
import type { IProduct } from "~/types/product";

export default class ProductApi {
  getAll(): Promise<IResponse<IProduct>> {
    return $axios.get("/products").then((res: AxiosInstance) => {
      return res;
    });
  }
}
