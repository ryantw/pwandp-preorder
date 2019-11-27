<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import { Component } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue";
import Product from "@/models/Product";
import { ProductApi } from "@/api/ProductApi";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private product!: Product | undefined;
  async mounted(): Promise<void> {
    try {
      this.product = await ProductApi.getProduct(1);
      console.log(this.product);
    } catch (err) {
      this.$router.push({ name: "error" });
    }
  }
}
</script>
