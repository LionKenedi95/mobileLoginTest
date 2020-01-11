<template>
  <div id="signupview" class="view">
    <h1>Sign Up</h1>
    <div class="form">
      <signup-form />
    </div>
    <footer>
      Already have an account?
      <br />
      <a @click="$router.push({ name: 'signinview' })">Sign In</a>
    </footer>
  </div>
</template>
<script>
import SignupForm from "../components/SignupForm.vue";
export default {
  name: "signupview",
  components: { SignupForm }
};
</script>
<style lang="scss" scoped>
footer {
  text-align: center;
}
</style>
