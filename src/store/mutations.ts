import Vue from 'vue';
import {
  State,
  MapStringT,
  LoadingMap,
} from './state';

import {
  SET_LOADING,
  SET_PRODUCT,
} from './mutationTypes';

import { Product } from '@/models';

const mutations = {
  [SET_LOADING] (state: State, action: LoadingMap) {
    const { value, id } = action;
    if (value) {
      Vue.set(state.loading, id, value);
    } else {
      Vue.delete(state.loading, id);
    }
  },
  [SET_PRODUCT] (state: State, productMap: MapStringT<Product|undefined>) {
    console.log('Updating products with id', productMap);
    const { id, value } = productMap;
    if (!id) {
      throw new Error('ID must be defined');
    }
    if (value) {
      // adds reactivity to object that it appends/overwrites
      Vue.set(state.products, id, value);
    } else {
      // removes reactivty and removes prop
      Vue.delete(state.products, id);
    }
  },
};

export {
  mutations,
};
