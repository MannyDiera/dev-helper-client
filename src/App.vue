<template>
  <div id="app">
    <Editor/>
  </div>
</template>

<script>
import Editor from '@/views/Editor';

export default {
  name: 'App',
  components: {
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
