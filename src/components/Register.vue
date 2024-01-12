<template>
  <main class="form-signin w-50 m-auto">
    <form>
      <h1 class="h3 mb-3 mt-5 fw-normal">Register</h1>

      <div class="form-floating mt-5">
        <input type="text" class="form-control " id="floatingInput" placeholder="Your Name">
        <label for="floatingInput">Name</label>
      </div>
      <div class="form-floating mt-3">
        <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mt-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword ">Password</label>
      </div>

      <button class="btn btn-primary w-100 py-2 mt-5" type="submit">Sign in</button>
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