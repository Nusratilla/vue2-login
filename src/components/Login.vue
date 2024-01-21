<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <h1 class="h3 mb-5 mt-5 fw-normal">Login</h1>

      <ValidationError v-if="validationErrors" :validationErrors="validationErrors" />

      <Input :label="'Email address'" :type="'email'" v-model="email"></Input>
      <Input :label="'Password'" :type="'password'" v-model="password"></Input>
      <Button class="mt-5" type="submit" :disabled="isLoading" @click="submitHandler">Login</Button>
    </form>
  </main>
</template>
<script>
import ValidationError from './ValidationError.vue';
export default {
  components: {
    ValidationError,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    },
    validationErrors() {
      return this.$store.state.auth.errors
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      this.$store
        .dispatch('login', data)
        .then(user => {
          console.log('user', user)
          this.$router.push({ name: 'home' })
        })
        .catch(err => console.log("ERROR", err))


    }
  },
}
</script>
<style></style>