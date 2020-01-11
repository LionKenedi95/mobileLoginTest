<template>
  <div class="text-input">
    <label v-if="label" class="label-title">
      {{ label }}
    </label>
    <i class="hint" :v-if="hint" @click="showHint = !showHint" />
    <input
      :value="value"
      @input="$emit('input', $event)"
      :type="type"
      :class="{ error: error }"
    />
    <span v-if="error" class="error-text">
      {{ error }}
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
      validatior: value => ["text", "number", "password"].includes(value)
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
      showHint: false
    };
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
    padding-left: 20px;
    position: absolute;
    left: 0;
    top: 0;
  }
  input {
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
  .hint {
    position: absolute;
    top: 0;
    right: 0;
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
