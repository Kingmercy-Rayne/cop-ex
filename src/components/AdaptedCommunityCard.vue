<template>
  <div class="adapted-community-card shadow--default">
    <h5>Adapted Communities</h5>
    <div class="adapted-community-card__location">
      <i class="las la-users"></i>
      <span class="label">Mindoro</span>
    </div>
    <div class="adapted-community-card__key">
      <div class="community-card-key__circle"></div>
      <span class="community-card-key__text label">Successfull</span>
    </div>
    <div class="adapted-community-card__key">
      <div class="community-card-key__circle"></div>
      <span class="community-card-key__text label">Unmet Target</span>
    </div>
    <div class="adapted-community-card__body">
      <AdaptedCommunityCardChart :width="40" height="100" />
    </div>
  </div>
</template>

<script>
import AdaptedCommunityCardChart from '@/components/AdaptedCommunityCardChart.vue';

export default {
  name: 'AdaptedCommunityCard',
  components: {
    AdaptedCommunityCardChart,
  },
};
</script>

<style lang="stylus" scoped>
.adapted-community-card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.2em 1.2em;
  background: var(--bg-color--alt);
  border-radius: 8px;

  .adapted-community-card__location {
    display: flex;
    align-items: center;
    margin: 0.6em 0 1em 0;

    span {
      margin-left: 2em;
      text-transform: capitalize;
    }

    i {
      font-size: 17px;
    }
  }

  .adapted-community-card__key {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: auto;
    margin-bottom: 1em;
    color: var(--neutral-grey--dark);

    .community-card-key__circle {
      border-radius: 50%;
      width: 9px;
      height: 9px;
      background: var(--primary-color--lighter300);
    }

    .community-card-key__text {
      margin: 0 1em;
    }
  }

  .adapted-community-card__body {
    position: absolute;
    right: 0;
    width: 180px;
    top: 10%;
    bottom: 0;
  }
}
</style>
