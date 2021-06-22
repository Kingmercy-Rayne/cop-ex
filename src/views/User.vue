<template>
  <div class="user view">
    <TheAppBar />
    <!-- <DashboardHeader title="Update User" /> -->
    <div class="user-tab-selector">
      <span
        class="selector-item h6"
        :class="[tab === 1 ? 'selector-item--active' : '']"
        @click="setTabFirst"
        >User Details</span
      >
      <span
        class="selector-item selector-item__event h6"
        :class="[tab === 2 ? 'selector-item--active' : '']"
        @click="setTabSecond"
        >Events</span
      >
    </div>
    <UserDetails />
  </div>
</template>

<script>
// import DashboardHeader from '@/components/DashboardHeader.vue';
import TheAppBar from '@/components/TheAppBar.vue';
import UserDetails from '@/components/Users/UserDetails.vue';

export default {
  name: 'User',
  components: { TheAppBar, UserDetails },
  data() {
    return {
      tab: 1,
    };
  },
  methods: {
    setTabFirst() {
      if (this.tab !== 1) {
        this.tab = 1;
      }
    },
    setTabSecond() {
      if (this.tab !== 2) {
        this.tab = 2;
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.user {
  .user-tab-selector {
    position: relative;
    display: flex;
    margin-top: 5vh;
    justify-content: flex-start;
    align-items: center;

    .selector-item {
      padding: 1.2vh 0;
      padding-right: 2.5vw;
      padding-left: 1vw;
      color: var(--text-color--primary);
      border-bottom: solid thin var(--text-color--primary);
      cursor: pointer;
    }

    .selector-item__event {
      // padding-left: 1vw;
    }

    .selector-item--active {
      position: relative;
      color: var(--secondary-color);
      color: var(--primary-color);

      // background: var(--bg-color--alt);
      // border-radius: 8px;
      &:before {
        position: absolute;
        content: '';
        bottom: -1px;
        left: 0;
        right: 0;
        height: 0.4rem;
        background: var(--secondary-color);
        background: var(--primary-color);
        border-radius: 12px;
      }
    }
  }
}
</style>
