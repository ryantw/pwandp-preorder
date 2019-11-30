import { State } from './state';
import { Product } from '@/models/Product';

import {
  SET_LOADING,
  SET_PRODUCT,
} from './mutationTypes';

const mutations = {
  [SET_LOADING] (state: State, loading: boolean) {
    state.loading = loading;
  },
  [SET_PRODUCT] (state: State, product: Product) {
    if (typeof product.id === 'undefined') {
      throw new Error('Id must be defined');
    }
    state.products.set(product.id, product);
  },
};

export {
  mutations,
};
