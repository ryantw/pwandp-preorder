<template>
  <div :class="style">
    {{ message.message }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Message as MessageModal } from '@/models/Message';

@Component
class Message extends Vue {
  @Prop({
    required: true,
    type: Object,
  })
  private message!: MessageModal;

  get style () {
    switch (this.message.type) {
    case 1:
      return 'has-background-success';
    case 2:
      return 'has-background-warning';
    case 3:
      return 'has-background-danger';
    default:
      return 'has-background-info';
    }
  }
}
export default Message;
</script>
