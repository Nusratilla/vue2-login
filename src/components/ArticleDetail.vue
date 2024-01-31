<template>
  <div v-if="article">
    <h1>{{ article.title }}</h1>
  </div>
</template>
<script>
import Loader from '@/ui-components/Loader.vue';
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail,
    })
  },
  components: { Loader }
}
</script>
<style></style>
