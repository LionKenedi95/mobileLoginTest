<template>
  <div class="text-input">
    <label v-if="label">
      {{ label }}
    </label>
    <div class="text-input--hint--container">
      <img
        v-if="hint"
        src="../assets/question.svg"
        @click="showHint = !showHint"
      />
      <div v-if="showHint" class="tolltip">
        {{ hint }}
      </div>
    </div>

    <div class="text-input--container">
      <input
        ref="input"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :type="currentType"
        :class="{ error: error }"
        :autocomplete="type === 'password'"
      />
      <img
        v-if="type === 'password' && currentType === 'password'"
        src="../assets/eye.svg"
        class="text-input--password-eye"
        @click="toogleShowPass"
      />
      <img
        v-if="type === 'password' && currentType === 'text'"
        src="../assets/close-eye.svg"
        class="text-input--password-eye"
        @click="toogleShowPass"
      />
    </div>
    <span v-if="error && errorText" class="error-text">
      {{ errorText }}
    </span>
  </div>
</template>

<script>
export default {
  name: "text-input",
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text",
      validatior: value => ["text", "email", "password"].includes(value)
    },
    label: {
      type: String,
      default: ""
    },
    hint: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: false
    },
    errorText: {
      type: String,
      default: ""
    },
    autoFocus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showHint: false,
      showPassword: false,
      currentType: this.type
    };
  },
  mounted() {
    if (this.autoFocus) this.$refs.input.focus();
  },
  methods: {
    toogleShowPass() {
      this.currentType = this.currentType === "password" ? "text" : "password";
      this.showPassword = !this.showPassword;
    }
  }
};
</script>

<style lang="scss" scoped>
.text-input {
  width: 100%;
  text-align: initial;
  padding: 20px 0;
  position: relative;
  label {
    padding-left: 1rem;
    position: absolute;
    left: 0;
    top: 0;
  }
  .text-input--container {
    position: relative;
    > input {
      border: 0;
      background: #f3f3fa;
      border-radius: 50px;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: rgba(0, 0, 0, 0.8);
      padding: 0.5rem 2rem 0.5rem 1rem;
      box-sizing: border-box;
      width: 100%;
      &:focus {
        outline: none;
      }
      &.error {
        background: #ffe0e6;
      }
    }
    .text-input--password-eye {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      width: 1.2rem;
    }
  }
  .text-input--hint--container {
    position: absolute;
    top: 0.25rem;
    right: 1rem;
    > .tolltip {
      position: absolute;
      bottom: 1.5rem;
      right: -1rem;
      width: 60vw;
      &::after {
        content: "";
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid #1e1a3e;
        position: absolute;
        bottom: -5px;
        right: calc(1rem + -2px);
      }
    }
  }
  .error-text {
    padding-left: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 10px;
    line-height: 20px;
    color: #ff6683;
  }
}
</style>
