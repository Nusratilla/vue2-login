<template>
  <h2 class="text-center m-5">Edit Article</h2>
  <div class="w-50 mx-auto">
    <form @submit.prevent>
      <Input type="text" label="Title" v-model="title" />
      <TextArea type="text" label="Description" v-model="description" />
      <TextArea type="text" label="Body" v-model="body" />
      <Button @click="editArticleHandler" :disabled="isLoading">Edit article</Button>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      title: '',
      description: '',
      body: '',
    }
  },
  methods: {
    editArticleHandler() { }
  },
  computed: {
    ...mapState({
      article: state => state.articles.articleDetail,
    })
  },
  mounted() {
    this.$store.dispatch('articleDetail', this.$route.params.slug)
  },
}
</script>
<style></style>