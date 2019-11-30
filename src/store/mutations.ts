import { State } from './state';
import { Product } from '@/models/Product';

const mutations = {
  setLoading (state: State, loading: boolean) {
    state.loading = loading;
  },
  setProduct (state: State, product: Product) {
    if (typeof product.id === 'undefined') {
      throw new Error('Id must be defined');
    }
    state.products.set(product.id, product);
  },
};

export {
  mutations,
};
