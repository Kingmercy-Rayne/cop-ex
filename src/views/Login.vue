<template>
  <div class="login view">
    <div class="login-access-indicator p">
      Currently accessing the system:
      <span class="h6">{{ this.getFullProfileName }}</span>
    </div>
    <div class="login__body">
      <span class="h5 login-greeting">Hello</span>
      <span class="h3">Who is accessing the system?</span>
      <LoginProfileCarousel v-if="loginStepper == 1" />
      <LoginPasswordField v-else-if="loginStepper == 2" />
      <div class="login__button-row">
        <IconButton
          :icon="'la-long-arrow-alt-left'"
          :text="'Previous'"
          :is-reverse="true"
          :is-plain="true"
          @click.native="loadPreviousStepperState"
        />
        <IconButton
          :icon="'la-long-arrow-alt-right'"
          :text="'Next'"
          @click.native="loadNextStepperState"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import LoginProfileCarousel from '@/components/Login/LoginProfileCarousel.vue';
import LoginPasswordField from '@/components/Login/LoginPasswordField.vue';
import IconButton from '@/components/IconButton.vue';

export default {
  computed: {
    ...mapState(['activeProfile', 'loginStepper']),
    getFullProfileName: {
      get() {
        if (this.activeProfile === 'cop') {
          return 'COP Coordinator';
        }
        if (this.activeProfile === 'ex') {
          return 'XP Coordinator';
        }
        return 'ESC President';
      },
      set() {
        return 1;
      },
    },
  },
  methods: {
    // TODO: move the navigation methods to the child component and
    // emit events from children rather than native listening
    loadPreviousStepperState() {
      if (this.loginStepper === 2) {
        this.$store.commit('CHANGE_LOGIN_STEPPER', 1);
      }
    },
    loadNextStepperState() {
      // TODO: Add form validation
      // TODO: Enable submission on keystroke_Enter
      if (this.loginStepper === 1) {
        this.$store.commit('CHANGE_LOGIN_STEPPER', 2);
      } else if (this.loginStepper === 2) {
        // TODO: Password verification

        this.$store.dispatch('LOGIN').then(() => {
          this.$router.push('/');
        });
      }
    },
  },
  components: { LoginProfileCarousel, IconButton, LoginPasswordField },
};
</script>

<style lang="stylus" scoped>
.login {
  // border: solid thin green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login-access-indicator {
    // justify-self: flex start;
    align-self: flex-start;
    margin-bottom: auto;
    margin-top: 1em;
    display: flex;
    align-items: center;
    // margin: 1em 0;
    color: var(--text-color--primary);

    span {
      color: var(--text-color--alt);
      padding: 0 0.5em;
    }
  }

  .login__body {
    // border: solid thin yellow;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    // TODO: add media query for transform value at smaller height
    transform: translateY(-10%);

    .login-greeting {
      color: var(--text-color--primary);
    }

    .login__button-row {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      // border: solid thin yellow;
      button:first-of-type {
        margin-right: 2em;
      }
    }
  }
}
</style>
