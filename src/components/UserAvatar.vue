<template>
  <div class="user-avatar">
    <img
      class="avatar"
      :src="require(`@/assets/img/crests/${this.img}.svg`)"
    />
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: ['ordinal'],
  computed: {
    // Return cached values until dependencies change
    img() {
      let image = '';

      switch (this.ordinal) {
        case '1':
          image = 'russia';
          break;
        case '2':
          image = 'chinese';
          break;
        case '3':
          image = 'family';
          break;
        case '4':
          image = 'coat-of-arms 2';
          break;
        case '5':
          image = 'chinese-crested';
          break;
        case '6':
          image = 'coat-of-arms';
          break;
        case '7':
          image = 'oriental-pearl-tower';
          break;
        case '8':
          image = 'lantern';
          break;
        default:
          image = 'medieval';
      }

      return image;
    },
  },
};
</script>

<style lang="stylus" scoped>
.user-avatar {
  // background: var(--neutral-white);
  padding: 0.1em;

  img {
    vertical-align: middle;
    width: 3rem;
    height: 3rem;
    // width: max(2rem, 35px);
    // height: max(3rem, 35px);
    width: clamp(2rem, 35px, 3rem);
    height: clamp(2rem, 35px, 3rem);
    border-radius: 50%;
  }
}

.user-avatar--alt {
  img {
    width: 5rem;
    height: 5rem;
    background: none;
  }
}
</style>
