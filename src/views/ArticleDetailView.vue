<template >
  <div>
    Article Details
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch('articleDetail', this.$route.params.slug)
  },
}
</script>
<style ></style>