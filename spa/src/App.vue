<template>
  <div id="app">
    <div class="top-row">
      <NavBar/>
      <ThemeToggle/>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';

export default {
  name: 'App',
  components: {
    NavBar,
    ThemeToggle
  }
}
</script>

<style>
#app {
  height: 100vh;
  width: 100vw;
  padding: 24px;
  position: relative;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--font-color);
  background: var(--color-secondary);
}
.top-row {
  display: flex;
  justify-content: space-between;
}
</style>
