import { Api } from './Api';
import { Config } from './Config';

abstract class RestApi extends Api {
  public static async get<T> (config: Config): Promise<T> {
    return this.api<T>({ ...config, method: 'GET' });
  }

  public static async put<T> (config: Config): Promise<T> {
    return this.api<T>({ ...config, method: 'PUT' });
  }

  public static async patch<T> (config: Config): Promise<T> {
    return this.api<T>({ ...config, method: 'PATCH' });
  }

  public static async delete<T> (config: Config): Promise<T> {
    return this.api<T>({ ...config, method: 'DELETE' });
  }
}

export {
  RestApi,
};
