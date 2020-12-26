<template>
  <div class="sidenav-list-item" :class="isActive ? 'is-active' : ''">
    <i class="fa fas" :class="icon"></i>
    <span :class="isActive ? 'h6' : 'h6-alt'">{{ title }}</span>
  </div>
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
  },
};
</script>

<style lang="stylus" scoped>
.sidenav-list-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1em;
  padding: 0.5em 1.2em 0.5em 0.6em;
  color: var(--text-color--primary);
  text-transform: capitalize;
  cursor: pointer;

  i {
    font-size: 20px;
    width: 10%;
  }

  span {
    margin-left: 1.5vw;
  }
}

.is-active {
  background: var(--bg-color--primary);
  border-radius: 0.4em;
  color: var(--text-color--alt);
}
</style>
