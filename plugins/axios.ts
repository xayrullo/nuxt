import axios from "axios";
import { useCookies } from "vue3-cookies";

const TOKEN = "token" as string;
const AUTH_EXPIRATION = "30d";
const { cookies } = useCookies();
/**
 * @description get token form localStorage
 */
export const getToken = (): string | null => {
  return cookies.get(TOKEN);
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  cookies.set(TOKEN, token, AUTH_EXPIRATION);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  cookies.remove(TOKEN);
};

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const $axios = axios.create({
    baseURL: process.env.API_URL,
  });

  $axios.interceptors.request.use(
    (config) => {
      if (getToken() && getToken() !== "undefined") {
        config.headers.setAuthorization("Bearer " + getToken());
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  $axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response).then((res) => res);
    },
    (error) => {
      let errorType;
      console.log(error);
      console.log(error.response);
      if (error.response && error.response.status) {
        switch (error.response.status) {
          case 400:
            errorType = "Bad Request Error400";
            break;
          case 401:
            errorType = "Unauthorized Error401";
            // authStore.purgeAuth();
            break;
          case 403:
            errorType = "Forbidden Error403";
            break;
          case 404:
            errorType = "Not Found Error404";
            // authStore.purgeAuth();
            break;
          case 408:
            errorType = "Request Timeout Error408";
            break;
          case 500:
            errorType = "Internal Server Error500";
            break;
          case 502:
            errorType = "Bad Gateway Error502";
            break;
          case 504:
            errorType = "Gateway Timeout Error504";
            break;
          case 505:
            errorType = "HTTP Version Not Supported Error505";
            break;
          case 507:
            errorType = "Insufficient Storage Error507";
            break;
          case 508:
            errorType = "Loop Detected Error508";
            break;
          default:
            errorType = `Error${error.response.status}`;
            break;
        }
      }
      return Promise.reject(error);
    }
  );
});
