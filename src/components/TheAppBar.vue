<template>
  <div class="the-app-bar">
    <VSearch />
    <ProfileTab />
  </div>
</template>

<script>
import VSearch from '@/components/VSearch.vue';
import ProfileTab from '@/components/ProfileTab.vue';

export default {
  name: 'TheAppBar',
  components: {
    VSearch,
    ProfileTab,
  },
};
</script>

<style lang="stylus" scoped>
.the-app-bar {
  width: 100%;
  min-height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // margin-top: 0.2em;
  // border: solid thin red;
}
</style>
