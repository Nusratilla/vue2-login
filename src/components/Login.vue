<template>
  <main class="form-signin w-25 m-auto">
    <form>
      <h1 class="h3 mb-5 mt-5 fw-normal">Login</h1>

      <Input :label="'Email address'" :type="'email'"></Input>
      <Input :label="'Password'" :type="'password'"></Input>
      <Button class="mt-5" type="submit">Login</Button>
    </form>
  </main>
</template>
<script>
export default {

}
</script>
<style></style>