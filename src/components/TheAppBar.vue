<template>
  <div class="the-app-bar">
    <!-- <VSearch /> -->
    <span>
      <i class="fa fas fa-bell-o shadow--default"></i>
      <i class="fa fas fa-gear shadow--default"></i>
    </span>
    <ProfileTab />
  </div>
</template>

<script>
// import VSearch from '@/components/VSearch.vue';
import ProfileTab from '@/components/ProfileTab.vue';

export default {
  name: 'TheAppBar',
  components: {
    // VSearch,
    ProfileTab,
  },
};
</script>

<style lang="stylus" scoped>
.the-app-bar {
  width: 100%;
  max-height: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3em;

  // border: solid thin red;
  span {
    margin-left: auto;
    padding: 0 2vw;
    color: var(--text-color--alt);

    i {
      padding: 0.5em 0.5em;
      background: var(--neutral-white);
      margin: 0 0.6em;
      font-size: 16px;
      cursor: pointer;
      border-radius: 8px;
    }
  }
}
</style>
