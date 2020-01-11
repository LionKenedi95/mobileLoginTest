<template>
  <div id="enterview" class="view">
    <h1>Ready for a great<br />User experience?</h1>
    <p>Bring your media to the next level!</p>
    <div id="enterview-controls">
      <a
        id="signup"
        class="button"
        @click="$router.push({ name: 'signupview' })"
      >
        Sign Up
      </a>
      <a
        id="login"
        class="button button--dark"
        @click="$router.push({ name: 'signinview' })"
      >
        ->
      </a>
    </div>
    <img
      src="../assets/woman-runs.svg"
      alt="Beautiful image of a running girl"
    />
  </div>
</template>

<script>
export default {
  name: "enter"
};
</script>

<style lang="scss" scoped>
img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 360px;
  max-height: 420px;
  z-index: -1;
}
#enterview-controls {
  margin-top: 2rem;
  z-index: 1;
  #signup {
    min-width: 100px;
    display: inline-block;
  }
}
</style>
