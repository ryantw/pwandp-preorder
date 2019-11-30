import {
  State,
} from './state';

import { RestApi } from '@/api/RestApi';
import { Product } from '@/models/Product';
import { ProductApi } from '@/configs';

interface ProductAction {
  id: string;
  overwrite?: boolean;
}

const actions = {
  setLoading ({ commit }: any, loading: boolean) {
    commit('setLoading', loading);
  },
  async getProduct ({ state, dispatch }: { dispatch: any, commit: any, state: State }, payload: ProductAction): Promise<Product|undefined> {
    if (!payload.overwrite) {
      const cachedProduct = state.products.get(payload.id);
      if (cachedProduct) {
        return cachedProduct;
      }
    }
    try {
      console.log('about to fetch product:', payload.id);
      let product = await RestApi.get<Product>(ProductApi);
      if (!product) {
        console.log('Product response was successful but empty', product);
      }
      dispatch('setProduct', product);
      return undefined;
    } catch {
      // log error
    }
  },
  setProduct ({ commit }: { commit: any }, product: Product) {
    commit('setProduct', product);
  },
};

export {
  actions,
  ProductAction,
};
