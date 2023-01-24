<template>
  <table class="table table-hover my-5">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
    </tr>
    </thead>
    <tbody>
      <tr  v-for="(item) in items"
           :key="item.id"
           @click="navigateToUser(item.id)">
        <th scope="row">{{item.id}}</th>
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td>{{item.city}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'UserComponent',
  props: ['items'],
  methods: {
    navigateToUser(id) {
      this.$router.push(`/users/${id}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  tbody tr:hover {
    cursor: pointer;
  }
</style>
