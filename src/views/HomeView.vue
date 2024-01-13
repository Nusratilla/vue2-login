<template>
  <div>
    Home Section {{ counter }}
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
  },
  computed: {
    counter() {
      return this.$store.state.count
    }
  }
}
</script>
<style></style>