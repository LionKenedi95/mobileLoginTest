<template>
  <div class="signin-form">
    <text-input
      v-for="(input, key) in inputs"
      :key="key"
      :type="input.type"
      :value="input.value"
      :label="input.label"
      :error="$v.inputs[key].$error"
      :hint="input.hint"
      :auto-focus="input.autoFocus"
      @input="input.value = $event"
    />
    <a class="button button--dark" @click="onSumbit">
      Sign in
    </a>
    <transition name="slide">
      <div v-if="wrongPassword" class="alert-container">
        <a class="alert" @click="wrongPassword = false"
          >Wrong email or password</a
        >
      </div>
    </transition>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import { required, minLength } from "vuelidate/lib/validators";
export default {
  components: { TextInput },
  data() {
    return {
      inputs: {
        email: {
          type: "email",
          value: "",
          label: "Email",
          autoFocus: true
        },
        password: {
          type: "password",
          value: "",
          label: "Password"
        }
      },
      wrongPassword: false
    };
  },
  validations: {
    inputs: {
      email: {
        value: {
          required,
          regular(value) {
            const pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/;
            return pattern.test(String(value).toLowerCase());
          }
        }
      },
      password: {
        value: {
          required,
          length: minLength(8),
          regular(value) {
            const v = String(value);
            /*eslint-disable no-useless-escape*/
            return (
              /([A-Z].*[A-Z])/.test(v) &&
              /[!"#$%&'()*+,\-.\/:;<=>?@[\\\]\^_`{\|}~]/.test(v)
            );
            /*eslint-enable no-useless-escape*/
          }
        }
      }
    }
  },
  methods: {
    onSumbit() {
      this.$v.$touch();
      // There should be an authorization attempt through the backend, but is didn't TR
      if (!this.$v.$error) {
        this.$router.push({ name: "mainview" });
      } else {
        this.wrongPassword = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.signin-form {
  background: #ffffff;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
