<template>
  <div class="the-sidenav shadow--default">
    <div class="logo h3">COP/EX</div>
    <div class="sidenav-list sidenav-list--main">
      <SidenavListItem
        v-for="(item, index) in navListMain"
        :key="index"
        :title="item.title"
        :icon="item.icon"
        :is-active="item.isActive"
      />
    </div>
    <div class="sidenav-list sidenav-list--sub">
      <SidenavListItem
        v-for="(item, index) in navListSub"
        :key="index"
        :title="item.title"
        :icon="item.icon"
        :is-active="item.isActive"
      />
    </div>
    <div class="sidenav-list">
      <SidenavListItem :title="'Logout'" :icon="'fa-sign-out'" :is-active="false" />
    </div>
  </div>
</template>

<script>
import SidenavListItem from '@/components/SidenavListItem.vue';

export default {
  name: 'TheSidenav',
  components: { SidenavListItem },
  data() {
    return {
      navListMain: [
        { title: 'overview', icon: 'fa-home', isActive: true },
        { title: 'communities', icon: 'fa-users', isActive: false },
        { title: 'history', icon: 'fa-archive', isActive: false },
        { title: 'upcoming', icon: 'fa-calendar', isActive: false },
      ],
      navListSub: [
        { title: 'create event', icon: 'fa-pencil', isActive: false },
        { title: 'view process', icon: 'fa-compress', isActive: false },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.the-sidenav {
  shadow--primary();
  width: 15%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1em 0 0 1em;
  background: var(--bg-color--alt);
  color: var(--text-color--primary);

  .logo {
    align-self: center;
    // border: solid thin yellow;
    color: var(--text-color--alt);
  }

  .sidenav-list {
    // width: 100%;
    // border: solid thin #eee;
    margin: 5vh 0;
    justify-self: space-between;
  }

  // fix second navlist division in place
  // should be possible with space-between and targeting the second instance of my navlist
  // alas, tis now working
  .sidenav-list--sub {
    margin-bottom: auto;
  }
}
</style>
