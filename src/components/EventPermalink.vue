<template>
  <div class="event-permalink">
    <span class="label">Copy Registration Link</span>
    <div class="link-box h3">
      <span class="h5 link-box__url shadow--default"
        >https://www.copex.vercel.app/events/d27gvd</span
      >
      <i class="la las la-retweet shadow--default"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventPermalink',
  componnets: {},
};
</script>

<style lang="stylus" scoped>
.event-permalink {
  display: flex;
  flex-direction: column;
  align-self: center;

  .link-box {
    height: 40px;
    min-width: 200px;
    display: flex;
    align-items: center;
    margin: 0.5em 0;

    .link-box__url {
      padding: 0.4em 0.4em;
      background-color: #eee;
      border-radius: 5px;
    }
  }

  i {
    padding: 0.2em 0.4em;
    border: solid thin #bbb;
    border-radius: 5px;
    margin: 0 0.1em;
  }
}
</style>
