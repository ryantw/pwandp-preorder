import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { Config } from './Config';
import { Header } from './Header';

abstract class Api {
  private static readonly client: AxiosInstance = axios.create();
  public static async api<T> (config: Config): Promise<T> {
    const apiResponse = await this.client
      .request<T>({ ...config });
    try {
      const checkedResponse = this.checkResponseStatus<T>(apiResponse);
      const response: T = checkedResponse.data;
      return response;
    } catch {
      throw new Error(apiResponse.statusText);
    }
  }

  public static addGlobalHeader (header: Header) {
    this.client.defaults.headers.common[header.name] = header.value;
  }

  public static addGlobalHeaders (headers: Header[]) {
    headers.forEach((header) => {
      this.addGlobalHeader(header);
    });
  }

  private static checkResponseStatus<T> (response: AxiosResponse<T>): AxiosResponse<T> {
    if (response.status >= 200 && response.status < 400) {
      return response;
    }
    throw new Error(response.statusText);
  }
}

export {
  Api,
};
