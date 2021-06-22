<template>
  <div class="the-sidenav shadow--default">
    <div class="logo h3">COP/EX</div>
    <ul class="sidenav-list sidenav-list--main">
      <SidenavListItem
        v-for="(item, index) in navListMain"
        :key="index"
        :title="item.title"
        :icon="item.icon"
        :route="item.route"
      />
    </ul>
    <ul class="sidenav-list sidenav-list--sub">
      <SidenavListItem
        v-for="(item, index) in navListSub"
        :key="index"
        :title="item.title"
        :icon="item.icon"
        :route="item.route"
      />
    </ul>
    <ul class="sidenav-list">
      <SidenavListItem :title="'Logout'" :icon="'fa-sign-out'" @click.native="logout" />
    </ul>
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
        {
          title: 'overview',
          icon: 'fa-home',
          route: '/',
        },
        {
          title: 'services',
          icon: 'fa-tasks',
          route: '/services',
        },
        // {
        //   title: 'Archive',
        //   icon: 'fa-tasks',
        //   route: '/archive',
        // },
        // {
        //   title: 'upcoming',
        //   icon: 'fa-calendar-check-o',
        //   route: '/upcoming',
        // },
        {
          title: 'create event',
          icon: 'fa-paint-brush',
          route: '/create',
        },
      ],
      navListSub: [
        // {
        //   title: 'create event',
        //   icon: 'fa-paint-brush',
        //   route: '/new',
        // },
        {
          title: 'view process',
          icon: 'fa-grav',
          route: '/process',
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('LOGOUT');
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="stylus" scoped>
.the-sidenav {
  width: 15%;
  // min-height: 100vh;
  // align-self: flex-start;
  position: fixed;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1em 0 0 1em;
  background: var(--bg-color--alt) !important;
  // background: #55BC7E;
  color: var(--text-color--primary);

  // border-radius: 12px;
  .logo {
    align-self: center;
    // border: solid thin yellow;
    // color: var(--text-color--alt);
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
