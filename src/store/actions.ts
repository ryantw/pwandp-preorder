import {
  State,
} from './state';

import { RestApi } from '@/api/RestApi';
import { Product } from '@/models/Product';
import { ProductApi } from '@/configs';
import { Config } from '@/api/Config';

import {
  SET_LOADING,
  SET_PRODUCT,
} from './mutationTypes';

interface ProductAction {
  id: string;
  overwrite?: boolean;
}

const actions = {
  setLoading ({ commit }: any, loading: boolean) {
    commit([SET_LOADING], loading);
  },
  async getProduct ({ state, dispatch }: { dispatch: any, commit: any, state: State }, payload: ProductAction): Promise<Product|undefined> {
    if (!payload.overwrite) {
      const cachedProduct = state.products.get(payload.id);
      if (cachedProduct) {
        console.log('cached product, returning early');
        return cachedProduct;
      }
    }
    let product: undefined|Product;
    try {
      console.log('about to fetch product:', payload.id);
      product = await RestApi.get<Product>({ ...ProductApi, url: `${ProductApi.url}/${payload.id}` });
      console.log(product);
      if (!product) {
        console.log('Product response was successful but empty', product);
      }
    } catch(err) {
      console.log('Product response failed for', payload.id);
      console.log(err);
      product = undefined;
    } finally {
      dispatch('setProduct', product);
    }
  },
  setProduct ({ commit }: { commit: any }, product: Product) {
    console.log('trying to set product');
    commit(SET_PRODUCT, product);
  },
};

export {
  actions,
  ProductAction,
};
