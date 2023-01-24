<template>
  <ErrorComponent v-if="error" :error="error"></ErrorComponent>
  <UserLayout v-if="!error" :user="user"></UserLayout>
</template>

<script>
import UserLayout from './UserLayout.vue';
import ErrorComponent from '../shared/ErrorComponent.vue';

export default {
  name: 'UserComponent',
  components: {
    UserLayout,
    ErrorComponent,
  },
  data() {
    return {
      user: {},
      error: '',
    };
  },
  props: ['id'],
  created() {
    fetch(`http://localhost:3000/users/${this.id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`User with the id ${this.id} not found`);
        }
        return response.json();
      })
      .catch((error) => {
        this.error = error.message;
      })
      .then((data) => {
        this.user = data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
