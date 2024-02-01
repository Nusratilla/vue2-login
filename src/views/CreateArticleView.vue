<template>
  <h2 class="text-center m-5">Creat Article</h2>
  <div class="w-50 mx-auto">
    <form @submit.prevent>
      <Input type="text" label="Title" v-model="title" />
      <TextArea type="text" label="Description" v-model="description" />
      <TextArea type="text" label="Body" v-model="body" />
      <Button @click="createArticleHandler" :disabled="isLoading">Create article</Button>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      title: '',
      description: '',
      body: '',
    }
  },
  methods: {
    createArticleHandler() {
      const article = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: [],
      }
      this.$store.dispatch('createArticle', article)
      this.$store.push('/')
    },
  },
  computed: {
    ...mapState({
      isLoading: state => state.control.isLoading,
    })
  }
}
</script>
<style></style>