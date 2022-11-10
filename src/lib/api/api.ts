import { AxiosInstance, AxiosRequestConfig } from "axios";

interface IAPI {
  fetch: (url: string, config?: AxiosRequestConfig) => Promise<any>;
}

class API implements IAPI {
  private instance: AxiosInstance;

  constructor(intance: AxiosInstance) {
    this.instance = intance;
  }

  async fetch(url: string, config?: AxiosRequestConfig) {
    const response = await this.instance.get(url, {
      ...config,
      headers: {
        ...config?.headers
      }
    });

    console.info("calling api");

    return response;
  }
}
export default API;
