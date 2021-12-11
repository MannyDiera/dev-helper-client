<template>
  <div id="app">
    <NavBar/>
    <Editor/>
  </div>
</template>

<script>
import Editor from '@/views/Editor';
import NavBar from './components/NavBar/NavBar';

export default {
  name: 'App',
  components: {
    NavBar,
    Editor
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}
</style>
