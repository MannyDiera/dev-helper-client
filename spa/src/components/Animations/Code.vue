<template>
  <lottie-vue-player
    src="https://assets9.lottiefiles.com/packages/lf20_jh9gfdye.json"
    :theme="options.theme"
    :player-size="options.playerSize"
    :player-controls="false"
    style="width: 90%; height: 90%; margin: auto"
  >
  </lottie-vue-player>
</template>

<script>
export default {
  name: 'Code',
  data: () => ({
    options: {
      minimizable: false,
      playerSize: "standard",
      backgroundColor: '#fff',
      backgroundStyle: 'color',
      theme: {
        controlsView: "standard",
        active: "light",
        light: {
          color: '#3D4852',
          backgroundColor: '#fff',
          opacity: '0.7',
        },
        dark: {
          color: '#fff',
          backgroundColor: '#202020',
          opacity: '0.7',
        }
      }
    }
  }),
};
</script>

<style scoped>

</style>
