<template>
  <button class="btn btn-primary" @click="$emit('on:click')">
    <i class="fa" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: { type: String, default: 'fa-plus' }
  }
}
</script>

<style lang="scss" scoped>
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
}
</style>
