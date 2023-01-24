<template>
  <div class="container my-5">
    <div class="row gx-2 gy-5">
      <div class="col-lg-3 gx-5" v-for="(item) in items" :key="item.id">
        <div class="card">
          <img class="card-img-top" src="../../../assets/images/userpic.jpg" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">Id: {{item.id}}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Email: {{item.email}}</li>
            <li class="list-group-item">City: {{item.city}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserComponent',
  props: ['items'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card:hover {
    cursor: pointer;
  }
</style>
