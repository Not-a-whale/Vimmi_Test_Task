<template>
  <div class="container mb-3">
    <div class="row">
      <div class="col-3 ml-5 p-1">
        <div class="btn btn-warning">
          <router-link :to="'/'" class="text-decoration-none text-light">
            Back to Users
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="alert alert-danger" role="alert">
    {{error}}
  </div>
</template>

<script>
export default {
  name: 'ErrorComponent',
  props: ['error'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
