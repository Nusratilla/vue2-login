<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item list-group-item-danger" v-for="errorMessage in errorMessages" :key="errorMessage">{{
        errorMessage }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    validationErrors: {
      type: Object,
      required: true,
    }
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map(name => {
        const msg = this.validationErrors[name].join(', ')
        return `${name} ${msg}`
      })
    }
  },
}
</script>
<style></style>