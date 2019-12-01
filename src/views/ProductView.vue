<template>
  <section>
    <div class="hero-body">
      <div class="container">
        <template v-if="product">
          <h1 class="title">{{ product.name }}</h1>
          <h2 class="subtitle">{{ product.description }}</h2>
          <h3>{{ product.id }}</h3>
        </template>
        <template v-else-if="isLoading">
          <progress class="progress is-small is-primary" max="100" />
        </template>
        <template v-else>
          Failed to load product with ID: {{ productId }}.
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Product } from '@/models/Product';
import { RestApi } from '@/api/RestApi';
import { Config } from '@/api/Config';
import { ProductApi } from '@/configs';
import { ProductAction } from '@/store/actions';

@Component({
  components: {},
})
export default class ProductView extends Vue {
  private product: Product|null = null;
  private isLoading: boolean = true;

  async beforeMount (): Promise<void> {
    this.getProduct();
  }

  async getProduct (): Promise<void> {
    this.isLoading = true;
    try {
      const payload: ProductAction = {
        id: this.productId,
      };
      const response = await this.$store.dispatch('getProduct', payload);
      this.product = response;
    } catch {
      // log error
    } finally {
      this.isLoading = false;
    }
  }

  get productId (): string {
    return this.$route.params.productId;
  }
}
</script>
