<template>
  <div
    class="login-profile-card"
    @click="changeActiveProfile"
    :class="isActiveCard ? 'active-card' : ''"
  >
    <img :src="require('@/assets/img/' + img + '.svg')" alt="" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'LoginProfileCard',
  props: ['img', 'profile'],
  computed: {
    ...mapState(['activeProfile']),
    isActiveCard() {
      if (this.activeProfile === this.profile) {
        return 1;
      }
      return 0;
    },
  },
  methods: {
    changeActiveProfile() {
      this.$store.commit('CHANGE_ACTIVE_PROFILE', this.profile);
    },
  },
};
</script>

<style lang="stylus" scoped>
.login-profile-card {
  position: relative;
  width: 130px;
  height: 120px;
  margin: 0 1em;
  border-radius: 8px;
  background: var(--bg-color--alt);

  img {
    position: relative;
    height: 100%;
  }
}

.active-card {
  transform: scale(1.1);
  border: solid thin var(--primary-color);
  // -webkit-transition: all 0.5s cubic-bezier(0.95, 0.23, 0.13, 0.56);
  // transition: all 0.5s cubic-bezier(0.95, 0.23, 0.13, 0.56);
  transition: all 0.3s cubic-bezier(0.95, 0.23, 0.82, 0.95);
  // transition-timing-function: cubic-bezier(1, -0.63, 0.34, 0.38);
  transition-timing-function: cubic-bezier(1, 0.5, 0.8, 1);
}
</style>
