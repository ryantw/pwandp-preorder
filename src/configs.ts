import { Config } from './api/Config';

const ProductApi: Config = {
  url: String(process.env.VUE_APP_PRODUCT_URL),
};

export {
  ProductApi,
};
