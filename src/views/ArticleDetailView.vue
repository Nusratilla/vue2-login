<template >
  <div>
    <Loader v-if="isLaoding" class="offset-md-6" />
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
  mounted() {
    this.$store.dispatch('articleDetail', this.$route.params.slug)
  },
  computed: {
    ...mapState({
      isLaoding: state => state.articles.isLoading,
    })
  },
}
</script>
<style ></style>