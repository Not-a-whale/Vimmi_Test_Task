<template>
  <div>
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
