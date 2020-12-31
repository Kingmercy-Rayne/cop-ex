<template>
  <!-- <button class="icon-button" :class="isPlain ? 'icon-button--alt' : ''"> -->
  <button
    class="icon-button"
    :class="{
      'icon-button-reverse': isReverse,
      'icon-button--alt': isPlain,
      'shadow--default': !isPlain,
    }"
  >
    <span class="p">{{ text }}</span>
    <i class="fas fa las la" :class="icon"></i>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    icon: {
      type: String,
      required: true,
      default: 'fa-home',
    },
    text: {
      type: String,
      required: true,
      default: 'button',
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
    isPlain: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="stylus" scoped>
.icon-button {
  min-width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: var(--text-color--tri);
  border-radius: 5px;
  border: none;
  background: var(--primary-color--lighter400);

  i {
    font-size: 20px;
    // border: solid thin green;
    // padding: 0;
    margin: 0 0.6em;
  }

  span {
    margin: 0 1em;
    // color: var(--text-color--tri);
  }
}

.icon-button-reverse {
  flex-direction: row-reverse;
}

.icon-button--alt {
  background: none;
  // border: solid thin grey;
  color: var(--text-color--primary);
}

.icon-button--alt:hover {
  transform: scale(0.98);
}
</style>
