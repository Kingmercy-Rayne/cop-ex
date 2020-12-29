<template>
  <div class="overview-carousel-card swiper-slide shadow--default">
    <div class="overview-carousel-card__body">
      <img src="@/assets/img/cesar-rincon-XHVpWcr5grQ-unsplash.jpg" alt="" />
      <div>
        <h6 class="h6-alt">Computer Eng.</h6>
        <span class="label">3 out of 4 events</span>
      </div>
    </div>
    <div class="overview-carousel-card__panel">
      <span class="label">On Track</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OverviewCarouselCard',
};
</script>

<style lang="stylus" scoped>
.overview-carousel-card {
  min-width: 150px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 0.1em;

  .overview-carousel-card__body {
    background: var(--bg-color--alt);
    height: 85%;
    position: relative;
    padding: 0.6em 0.8em;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;

    img {
      width: 25px;
      height: 25px;
      border-radius: 50%;
    }

    span {
      color: var(--neutral-grey--light);
      margin: 3em 0;
    }
  }

  .overview-carousel-card__panel {
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 8px;
    height: 15%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 1em;

    span {
      font-weight: 500;
    }
  }
}
</style>
