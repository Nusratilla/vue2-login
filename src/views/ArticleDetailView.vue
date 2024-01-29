<template >
  <div>
    <ArticleDetaile />
  </div>
</template>
<script>
import ArticleDetaile from '@/components/ArticleDetail.vue'
export default {
  components: {
    ArticleDetaile
  },
  mounted() {
    this.$store.dispatch('articleDetail', this.$route.params.slug)
  },
}
</script>
<style ></style>