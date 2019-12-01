<template>
  <div>
    <p>Uh oh, something broke! {{ id }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
class ErrorView extends Vue {
  @Prop() private id!: number;
}

export default ErrorView;
</script>
