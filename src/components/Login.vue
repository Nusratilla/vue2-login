<template>
  <main class="form-signin w-50 m-auto">
    <form>
      <h1 class="h3 mb-3 mt-5 fw-normal">Login</h1>

      <Input :label="'Email address'" :type="'email'"></Input>
      <Input :label="'Password'" :type="'password'"></Input>
      <Button type="submit">Login</Button>
    </form>
  </main>
</template>
<script>
export default {

}
</script>
<style>
/* .form-signin {
  font-size: 1rem;
} */
</style>