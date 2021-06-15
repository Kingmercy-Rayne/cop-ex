<template>
  <div class="department-crest">
    <img class="avatar" :src="require(`@/assets/img/crests/${this.img}.svg`)" />
  </div>
</template>

<script>
export default {
  name: 'DepartmentCrest',
  props: ['department', 'all'],
  computed: {
    // Return cached values until dependencies change
    img() {
      let crest = '';

      switch (this.department) {
        case 'ae':
          crest = 'russia';
          break;
        case 'arki':
          crest = 'chinese';
          break;
        case 'ce':
          crest = 'family';
          break;
        case 'cpe':
          crest = 'coat-of-arms 2';
          break;
        case 'ee':
          crest = 'chinese-crested';
          break;
        case 'ece':
          crest = 'coat-of-arms';
          break;
        case 'ie':
          crest = 'oriental-pearl-tower';
          break;
        case 'me':
          crest = 'lantern';
          break;
        default:
          crest = 'medieval';
      }
      if (this.all) {
        crest = 'medieval';
      }
      return crest;
    },
  },
};
</script>

<style lang="stylus" scoped>
.department-crest {
  vertical-align: middle;
  width: 3rem;
  height: 3rem;
  // width: max(2rem, 35px);
  // height: max(3rem, 35px);
  width: clamp(2rem, 35px, 3rem);
  height: clamp(2rem, 35px, 3rem);
  padding: 0.1em;
  border-radius: 50%;
  background: var(--neutral-white);
}
</style>
