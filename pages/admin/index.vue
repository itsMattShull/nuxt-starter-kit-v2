<template>
  <div>
    <admin-nav :name='this.$store.state.user.name'></admin-nav>
    Hello world!<br>
  </div>
</template>

<script>
  import AdminNav from '~/components/AdminNav.vue';
  import eventHub from '~/plugins/eventsHub.js';

  export default {
    layout: 'admin',
    components: {
      AdminNav,
    },
    fetch({ store, redirect }) {
      if (!store.state.user) {
        return redirect('/');
      }
      return false;
    },
    methods: {
      async logout() {
        try {
          await this.$store.dispatch('logout');
          window.location.replace('/');
        } catch (e) {
        // eslint-disable-next-line
          console.log(e);
        }
      },
    },
    mounted() {
      eventHub.$on('logout', () => {
        this.logout();
      });
    },
  };
</script>

<style scoped>

</style>