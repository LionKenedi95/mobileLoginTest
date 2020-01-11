<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  > div {
    padding: 2rem 0.5rem;
  }
}
</style>
