<template>
  <form
    class="login-password-field p shadow--default"
    v-on-clickaway="setInactive"
    :class="{ 'border--alt': isInputActive }"
    @submit.prevent=""
  >
    <label for="login-password" v-if="isInputActive"><span class="label">Password</span></label>
    <input
      :type="this.isPasswordVisible ? 'text' : 'password'"
      name="login-password"
      class="password-input p"
      :class="{ 'password-input--alt': isInputActive }"
      @focus="setActive"
    />
    <i class="fa fas fa-eye" v-if="!isPasswordVisible" @click="toggleVisibility"></i>
    <i class="fa fas fa-eye-slash" v-else @click="toggleVisibility"></i>
  </form>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'LoginPasswordField',
  data() {
    return {
      isInputActive: false,
      isPasswordVisible: false,
    };
  },
  mixins: [clickaway],
  methods: {
    setInactive() {
      this.isInputActive = false;
    },
    setActive() {
      this.isInputActive = true;
    },
    toggleVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    },
  },
};
</script>

<style lang="stylus" scoped>
.login-password-field {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4em 0.1em 0.4em 0.4em;
  margin: calc(60px + 2em);
  border-radius: 0.5em;
  background: var(--bg-color--alt);
  transition: all 0.3s ease-in-out;

  .label {
    position: absolute;
    left: 1.2em;
    top: 0;
    display: flex;
    align-items: flex-flex-start;
    color: var(--text-color--primary);
    -webkit-transition: all 0.3s cubic-bezier(0.95, 0.23, 0.82, 0.95);
    transition: all 0.3s cubic-bezier(0.95, 0.23, 0.82, 0.95);
  }

  i {
    // border: solid thin purple;
    padding: 0.1em 1em;
    // font-size: 20px;
    cursor: pointer;
  }

  .password-input {
    min-width: 15vw;
    padding: 0.1em 0.5em;
    border: none;
    outline: none;
    background: none;
  }

  .password-input--alt {
    padding: 0.2em 0.5em;
    transform: translateY(20%);
  }
}

.border--alt {
  border: solid thin var(--primary-color);
}
</style>
