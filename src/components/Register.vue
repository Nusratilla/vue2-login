<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <h1 class="h3 mt-5 mb-5 fw-normal">Register</h1>

      <ValidationError v-if="validationErrors" :validationErrors="validationErrors" />

      <Input :label="'Name'" :type="'text'" v-model="username"></Input>
      <Input :label="'Email address'" :type="'email'" v-model="email"></Input>
      <Input :label="'Password'" :type="'password'" v-model="password"></Input>

      <Button class="mt-5" type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
    </form>
  </main>
</template>
<script>
import ValidationError from './ValidationError.vue'
export default {
  components: {
    ValidationError,
  },
  data() {
    return {
      username: '',
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
        .dispatch('register', data)
        .then(user => {
          console.log('user', user)
          this.$router.push({ name: 'home' })
        })
        .catch(err => console.log("ERROR", err))


    }
  }
}
</script>
<style>
.form-signin {
  font-size: 1rem;
}
</style>