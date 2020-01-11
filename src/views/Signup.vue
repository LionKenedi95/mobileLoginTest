<template>
  <div id="signupview" class="view">
    <h1>Sign Up</h1>
    <footer>
      Already have an account?
      <br />
      <a @click="$router.push({ name: 'signinview' })">Sign In</a>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
footer {
  text-align: center;
}
</style>
