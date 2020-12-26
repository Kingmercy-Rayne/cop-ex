<template>
  <div id="app">
    <The-Sidenav />
    <div class="page">
      <The-App-Bar />
      <router-view />
    </div>
  </div>
</template>

<script>
import TheSidenav from '@/components/TheSidenav.vue';
import TheAppBar from '@/components/TheAppBar.vue';

export default {
  components: {
    TheAppBar,
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.page {
  flex: 1;
  background: var(--bg-color--primary);
  margin: 8px 10px;
  padding: 1em 4vw;
  border-radius: 12px;

  .navbar {
    border: solid thin cyan;
    height: 50px;
  }
}
</style>
