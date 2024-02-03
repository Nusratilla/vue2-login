<template>
  <div v-if="article">
    <div class="row">
      <div class="col-12 mt-3">
        <h3>{{ article.title }}</h3>
      </div>
      <div class="col-md-12 col-lg-8 mt-3">
        <p class="opacity-75 fw-bold">Description:</p>
        <p class="font-monospace">{{ article.description }}</p>
      </div>
      <div class="col-6 col-lg-2 mt-3">
        <p class="opacity-75 fw-bold">Created at:</p>
        <p class="font-monospace">{{ new Date(article.createdAt).toLocaleDateString("us") }}</p>
      </div>
      <div class="col-6 col-lg-2 mt-3">
        <p class="opacity-75 fw-bold">Updated at:</p>
        <p class="font-monospace">{{ new Date(article.updatedAt).toLocaleDateString("us") }}</p>
      </div>
      <div class="col-lg-4 mt-3">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <p class="opacity-75 fw-bold">Author:</p>
          <div class="col-sm-5 bg-light">
            <img :src="article.author.image" class="img-thumbnail col-sm-12" alt="Author">
          </div>
          <div>
            <h4 class="mt-3">{{ article.author.username }}</h4>
          </div>
        </div>
      </div>
      <div class="col-lg-8 mt-3">
        <p class="opacity-75 fw-bold">Body:</p>
        <p class="font-monospace">{{ article.body }}</p>
      </div>
    </div>
  </div>
</template>
<script>
// import Loader from '@/ui-components/Loader.vue';
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail,
    })
  },
  // components: { Loader }
}
</script>
<style></style>
