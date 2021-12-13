<template>
  <div id="nav">
    <div class="nav-item" v-for="(route, index) in allRoutes" :key="index">
      <span v-if="index > 0"> | </span>
      <router-link :to="route.path">
         {{ route.name }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    currentUser: 'MannyD'
  }),
  computed: {
    allRoutes() {
      return this.$router.options.routes;
    }
  }
};
</script>

<style scoped>
#nav .nav-item {
  display: inline-block;
}
#nav a {
  font-weight: bold;
  color: var(--link-color);
  text-decoration: none;
  margin: auto 4px;
}
#nav a.router-link-exact-active {
  color: var(--link-active);
}
</style>
