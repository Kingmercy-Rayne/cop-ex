<template>
  <div class="login view">
    <div class="login-access-indicator p">
      Currently accessing the system:
      <span class="h6">COP Coordinator</span>
    </div>
    <div class="login__body">
      <span class="h5 login-greeting">Hello</span>
      <span class="h3">Who is accessing the system?</span>
      <LoginProfileCarousel />
      <div class="login__button-row">
        <IconButton />
      </div>
    </div>
  </div>
</template>

<script>
import LoginProfileCarousel from '@/components/Login/LoginProfileCarousel.vue';
import IconButton from '@/components/IconButton.vue';

export default {
  components: { LoginProfileCarousel, IconButton },
};
</script>

<style lang="stylus" scoped>
.login {
  border: solid thin green;
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
    border: solid thin yellow;
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .login-greeting {
      color: var(--text-color--primary);
    }

    .login__button-row {
      display: flex;
    }
  }
}
</style>
