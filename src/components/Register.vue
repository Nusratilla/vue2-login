<template>
  <main class="form-signin w-50 m-auto">
    <form>
      <h1 class="h3 mb-3 mt-5 mb-5 fw-normal">Register</h1>

      <Input :label="'Name'" :type="'text'"></Input>
      <Input :label="'Email address'" :type="'email'"></Input>
      <Input :label="'Password'" :type="'password'"></Input>

      <Button type="submit">Register</Button>
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