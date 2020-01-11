<template>
  <div class="signin-form">
    <text-input
      v-for="(input, key) in inputs"
      v-model="input.value"
      :key="key"
      :type="input.type"
      :label="input.label"
      :error="$v.inputs[key].$error ? input.errorText : undefined"
      :hint="input.hint"
      :auto-focus="input.autoFocus"
    />
    <a class="button button--dark" @click="onSumbit">
      Sign in
    </a>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import { required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  components: { TextInput },
  data() {
    return {
      inputs: {
        name: {
          value: "",
          label: "Full name",
          errorText: "Enter valid full name",
          autoFocus: true
        },
        email: {
          value: "",
          label: "Email",
          errorText: "Enter valid email"
        },
        password: {
          type: "password",
          value: "",
          label: "Password",
          hint:
            "Password must contain 8+ symbols, 1 special and 2 capital letters",
          errorText: "Enter valid password"
        },
        repassword: {
          type: "password",
          value: "",
          label: "Repeat password"
        }
      }
    };
  },
  validations: {
    inputs: {
      $each: {
        value: {
          required
        }
      },
      name: {
        value: {
          minLength: minLength(5)
        }
      },
      email: {
        value: {
          regular(value) {
            const pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
            return pattern.test(String(value).toLowerCase());
          }
        }
      },
      password: {
        value: {
          length: minLength(8),
          regular(value) {
            const v = String(value).toLowerCase();
            return /([A-Z].*[A-Z])/.test(v);
          }
        }
      },
      repassword: {
        value: {
          sameAsPassword: sameAs("password")
        }
      }
    }
  },
  watch: {
    inputs: {
      handler: function() {
        if (this.$v.$error) this.$v.$reset();
      },
      deep: true
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
