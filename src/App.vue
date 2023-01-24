<template>
  <div class="
    d-flex
    flex-column
    justify-content-between
    flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
    <h5 class="my-0 mr-md-auto font-weight-normal p-2">Company name</h5>
    <nav class="my-2 my-md-0 mr-md-3 p-2">
      <a class="p-2 text-dark text-decoration-none" href="#">Features</a>
      <a class="p-2 text-dark text-decoration-none" href="#">Enterprise</a>
      <a class="p-2 text-dark text-decoration-none" href="#">Support</a>
      <a class="p-2 text-dark text-decoration-none" href="#">Pricing</a>
    </nav>
    <a class="btn btn-outline-primary p-2" href="#">Sign up</a>
  </div>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
};
</script>

<style>
</style>
