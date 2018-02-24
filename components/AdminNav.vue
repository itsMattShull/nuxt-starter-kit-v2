<template>
  <nav>
    <ul class="user-links">
      <li>Hello, {{ name }}</li>
      <li>
        <img class="img-circle img-responsive" :src="this.imageUrl">
      </li>
      <li class="user-links__divider"></li>
      <li>
        <button class="logoutButton" @click="logout">
          <span>Log Out</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
  import eventHub from '~/plugins/eventsHub.js';

  export default {
    props: {
      name: {
        type: String,
        default: 'User',
      },
      imageUrl: {
        type: String,
        default: '/default_profile_pic.jpg',
      },
    },
    methods: {
      logout: () => {
        eventHub.$emit('logout');
      },
    },
  };
</script>

<style lang="scss" scoped>
  nav {
    background: #171717;
  }

  .logo img {
    width: 45px;
  }
</style>