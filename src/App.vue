<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <p>{{users.toString()}}</p>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data() {
    return {
      users: [],
    };
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
