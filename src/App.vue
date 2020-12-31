<template>
  <div id="app">
    <The-Sidenav v-if="isLoggedIn" />
    <div class="page-container" :class="!isLoggedIn ? 'page-container--expander' : ''">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheSidenav from '@/components/TheSidenav.vue';

export default {
  computed: { ...mapState(['isLoggedIn']) },
  components: {
    TheSidenav,
  },
};
</script>

<style lang="stylus">
shadow--primary() {
  box-shadow: 2px 4px 10px 2px rgba(0, 0, 0, 0.1);
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  position: relative;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-container {
  flex: 1;
  background: var(--bg-color--primary);
  // TODO: add page gutter v and h as custom props
  margin: 8px 10px;
  margin-left: calc(15% + 8px);
  padding: 0 4vw;
  border-radius: 12px;
}

.page-container--expander {
  margin: 8px 10px;
}

.view {
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 16px);
  color: var(--text-color--alt);
}
</style>
