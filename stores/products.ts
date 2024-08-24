import { ref } from "vue";
import { defineStore } from "pinia";

import type { IProduct } from "~/types/product";
import type { IResponse } from "~/types";
// import { $api } from "~/api";

const PRODUCTS_STORE = "productsStore";

export const useCompaniesStore = defineStore(PRODUCTS_STORE, () => {
  const products = ref<IProduct[]>([]);

  function fetchProducts() {
    // return new Promise<IProduct[]>((resolve, reject) => {
    //   return $api.product
    //     .getAll()
    //     .then((res) => {
    //       products.value = res.products;
    //       resolve(res.products);
    //     })
    //     .catch((err) => {
    //       reject(err);
    //     });
    // });
  }

  return {
    products,
    fetchProducts,
  };
});

const store = useCompaniesStore();
store.$subscribe((mutation) => {
  if (mutation.storeId === PRODUCTS_STORE) {
    sessionStorage.setItem(
      PRODUCTS_STORE,
      JSON.stringify({
        products: store.products,
      })
    );
  }
});
