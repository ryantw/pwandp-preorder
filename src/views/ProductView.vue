<template>
  <section>
    <div class="hero-body">
      <div v-if="product" class="container">
        <h1 class="title">{{ product.name }}</h1>
        <h2 class="subtitle">{{ product.description }}</h2>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import Product from "@/models/Product";
import { ProductApi } from "@/api/ProductApi";

@Component({
  components: {}
})
export default class ProductView extends Vue {
  private product: Product | null = null;

  private async mounted(): Promise<void> {
    console.log("what!");
    try {
      this.product = await ProductApi.getProductById(
        parseInt(this.$route.params["id"])
      );
    } catch (err) {
      this.$router.push({ name: "error" });
    }
  }
}
</script>
