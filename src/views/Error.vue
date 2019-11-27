<template>
  <div>
    <p>Uh oh, something broke! {{ id }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Error extends Vue {
  @Prop() private id!: number;
}
</script>
