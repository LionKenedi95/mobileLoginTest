<template>
  <div id="signinview" class="view">
    <h1>Sign In</h1>
    <div class="form">
      <signin-form />
    </div>
    <footer>
      Don’t have an account yet?
      <br />
      <a @click="$router.push({ name: 'signupview' })">Sign Up</a>
    </footer>
  </div>
</template>

<script>
import SigninForm from "../components/SigninForm.vue";
export default {
  name: "signinview",
  components: { SigninForm }
};
</script>
<style lang="scss" scoped>
footer {
  text-align: center;
}
</style>
