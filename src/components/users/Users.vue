<template>
  <div>
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
    <main class="container">
      <Switcher @tableActive="tableActive" @listActive="listActive"></Switcher>
      <UserTable v-if="isTableActive" :items="users"></UserTable>
      <UserList v-if="isListActive" :items="users"></UserList>
    </main>
  </div>
</template>

<script>
import UserTable from './UserTable.vue';
import UserList from './UserList.vue';
import Switcher from '../shared/Switcher.vue';

export default {
  name: 'UsersComponent',
  components: {
    UserTable,
    UserList,
    Switcher,
  },
  data() {
    return {
      isTableActive: true,
      isListActive: false,
      users: [],
    };
  },
  methods: {
    tableActive() {
      if (!this.isTableActive) {
        this.isTableActive = true;
        this.isListActive = false;
      }
    },
    listActive() {
      if (!this.isListActive) {
        this.isListActive = true;
        this.isTableActive = false;
      }
    },
  },
  created() {
    fetch('http://localhost:3000/users')
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
