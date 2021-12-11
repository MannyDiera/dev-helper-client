<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/editor">Editor</router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    currentUser: 'MannyD'
  }),
};
</script>

<style scoped>

</style>
