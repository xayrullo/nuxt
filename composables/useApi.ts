import { useNuxtApp } from "#app";

type FetchMethod = (url: string, options?: RequestInit) => Promise<any>;

export const useApi = () => {
  const baseURL = "https://dummyjson.com";

  const { $fetch } = useNuxtApp();
  const fetch: FetchMethod = $fetch as any;

  const get = async (endpoint: string, params?: object) => {
    const url = new URL(endpoint, baseURL);
    if (params) {
      url.search = new URLSearchParams(params as any).toString();
    }
    const response = useFetch(url.href);
    if (response.error.value) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.data.value;
  };

  const post = async (endpoint: string, body: object) => {
    const response = await fetch(new URL(endpoint, baseURL).toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    return response.json();
  };

  // Add other methods as needed (PUT, DELETE, etc.)

  return { get, post };
};
