<template>
  <div id="enterview">
    <h1>Ready for a great User experience?</h1>
    <p>Bring your media to the next level!</p>
    <div>
      <a :to="{ name: 'signupview' }" class="button">Sign Up</a>
      <a :to="{ name: 'loginview' }" class="button button--dark">-></a>
    </div>
    <img src="../assets/woman.svg" alt="Woman image" />
  </div>
</template>

<script>
export default {
  name: "enter"
};
</script>

<style lang="scss" scoped>
#enterview {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
