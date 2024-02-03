<template >
  <div>
    <Loader v-if="isLaoding" class="offset-md-6 mt-5" />
    <ArticleDetail v-else />
  </div>
</template>
<script>
import ArticleDetail from '@/components/ArticleDetail.vue'
import { mapState } from 'vuex';
export default {
  components: {
    ArticleDetail,
  },
  computed: {
    ...mapState({
      isLaoding: state => state.articles.isLoading,
    })
  },
  mounted() {
    this.$store.dispatch('articleDetail', this.$route.params.slug)
  },
}
</script>
<style ></style>