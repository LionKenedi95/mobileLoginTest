<template>
  <div class="signin-form">
    <text-input
      v-for="(input, key) in inputs"
      :key="key"
      :type="input.type"
      :value="input.value"
      :label="input.label"
      :error="$v.inputs[key].$error ? input.errorText : undefined"
      :hint="input.hint"
      :auto-focus="input.autoFocus"
      @input="input.value = $event"
    />
    <a class="button button--dark" @click="onSumbit">
      Sign in
    </a>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import { required } from "vuelidate/lib/validators";
export default {
  components: { TextInput },
  data() {
    return {
      inputs: {
        email: {
          value: "",
          label: "Email",
          errorText: "Enter valid email",
          autoFocus: true
        },
        password: {
          type: "password",
          value: "",
          label: "Password",
          hint:
            "Password must contain 8+ symbols, 1 special and 2 capital letters",
          errorText: "Enter valid password"
        }
      }
    };
  },
  validations: {
    inputs: {
      email: {
        value: {
          required,
          regular(value) {
            const pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
            return pattern.test(String(value).toLowerCase());
          }
        }
      },
      password: {
        value: {
          required
        }
      }
    }
  },
  methods: {
    onSumbit() {
      this.$v.$touch();
      if (!this.$v.$error) {
        this.$router.push({ name: "mainview" });
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
</style>
