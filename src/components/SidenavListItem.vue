<template>
  <li
    class="sidenav-list-item"
    :class="isActiveRoute ? 'is-active' : ''"
    @click="visitRoute(route)"
  >
    <i class="fa fas fab fal fad" :class="icon"></i>
    <span :class="isActive ? 'h6' : 'h6-alt'">{{ title }}</span>
  </li>
</template>

<script>
export default {
  name: 'SidenavListItem',
  props: {
    title: {
      type: String,
      required: true,
      default: 'item',
    },
    icon: {
      type: String,
      required: true,
      default: 'fa-home',
    },
    isActive: {
      type: Boolean,
      required: false,
      default: undefined,
    },
    route: {
      type: String,
      required: true,
      default: '/route',
    },
  },
  methods: {
    visitRoute(routePath) {
      if (this.$route.path !== '/logout') {
        this.$router.push(routePath);
      }
    },
  },
  computed: {
    isActiveRoute() {
      if (this.$route.path === this.route) {
        return 1;
      }
      return 0;
    },
  },
};
</script>

<style lang="stylus" scoped>
.sidenav-list-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1em;
  // padding: 0.5em 1.2em 0.5em 0.6em;
  padding: 0.5em 2.2em 0.5em 0.6em;
  color: var(--text-color--primary);
  text-transform: capitalize;
  cursor: pointer;

  i {
    font-size: 20px;
    width: clamp(1.5vw, auto, 2.2vw);
    // border: solid thin crimson;
  }

  span {
    margin-left: 1.5vw;
  }
}

.is-active {
  background: var(--bg-color--primary);
  // background: var(--button-bg--primary);
  // background: linear-gradient(115deg, var(--button-bg--alt ) 0%, var(--bg-color--primary) 52%);
  border-radius: 0.4em;
  color: var(--text-color--alt);
  transition: all 0.35s cubic-bezier(1, 0.445, 0.255, 0.64);
}
</style>
