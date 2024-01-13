<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <h1 class="h3 mt-5 mb-5 fw-normal">Register</h1>

      <Input :label="'Name'" :type="'text'"></Input>
      <Input :label="'Email address'" :type="'email'"></Input>
      <Input :label="'Password'" :type="'password'"></Input>

      <Button class="mt-5" type="submit">Register</Button>
    </form>
  </main>
</template>
<script>
export default {

}
</script>
<style>
.form-signin {
  font-size: 1rem;
}
</style>