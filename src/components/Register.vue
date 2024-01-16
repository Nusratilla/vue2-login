<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <h1 class="h3 mt-5 mb-5 fw-normal">Register</h1>

      <Input :label="'Name'" :type="'text'"></Input>
      <Input :label="'Email address'" :type="'email'"></Input>
      <Input :label="'Password'" :type="'password'"></Input>

      <Button class="mt-5" type="submit" :disabled="isLoading" @click="submitHandler">Register</Button>
    </form>
  </main>
</template>
<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.auth.isLoading
    },
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      const data = {
        username: 'nusraticbkjnxclla',
        email: 'info@nusratikjlla.uz',
        password: '1234567'
      }
      this.$store
        .dispatch('register', data)
        .then(user => console.log('user', user))
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