<template>
  <div>
    Home Section {{ $store.state.count }}
  </div>
  <div class="w-25">
    <Button @click="increaseHandler">Increase</Button>
    <Button @click="decreaseHandler">Decrease</Button>
  </div>
</template>
<script>
export default {
  methods: {
    increaseHandler() {
      this.$store.commit('increment')
    },
    decreaseHandler() {
      this.$store.commit('decrement')
    }
  }
}
</script>
<style></style>