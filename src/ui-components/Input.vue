<template>
  <div class="form-floating mt-3">
    <input :type="type" class="form-control" id="floatingPassword" :placeholder="label">
    <label for="floatingInput ">{{ label }}</label>
  </div>
</template>
<script>
import { stringifyQuery } from 'vue-router';

export default {
  name: 'Input',
  props: {
    label: String,
    type: String,
  },
}
</script>
<style></style>