<template>
  <div class="event-banner-option">
    <div class="key label">{{ optionKey }}</div>
    <div class="item h6">{{ optionItem }}</div>
  </div>
</template>

<script>
export default {
  name: 'EventBannerOption',
  props: ['optionKey', 'optionItem'],
};
</script>

<style lang="stylus" scoped>
.event-banner-option {
  display: flex;
  flex-direction: column;
  padding: 0.4em 0.6em;
  margin-right: 2vw;
}
</style>
