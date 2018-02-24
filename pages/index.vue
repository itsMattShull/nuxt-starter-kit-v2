<template>
  <section class="container">
    <form v-on:submit.prevent="login">
      <div style="margin-top: 10px;">
        <label for="username">Username</label>
        <input type="text" name="username" v-model="username" autofocus>
      </div>
      <div style="margin-top: 10px;">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="password">
      </div>
      <div style="margin-top: 10px;">
        <input type="submit" value="Log In">
      </div>
    </form>
  </section>
</template>

<script>
// import axios from '~/plugins/axios';

export default {
  head() {
    return {
      title: 'Log In',
    };
  },
  data() {
    return {
      username: '',
      password: '',
    };
  },
  fetch({ store, redirect }) {
    if (store.state.user) {
      return redirect('/admin');
    }
    return false;
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.username,
          password: this.password,
        });
        this.username = '';
        this.password = '';
        window.location.replace('/admin');
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo {
    max-width: 80%;
  }
</style>
