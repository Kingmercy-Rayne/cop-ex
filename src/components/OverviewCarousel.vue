<template>
  <!-- Swiper -->
  <div class="swiper-container" ref="swiperContainjer">
    <div class="swiper-wrapper">
      <OverviewCarouselCard />
      <OverviewCarouselCard />
      <OverviewCarouselCard />
      <OverviewCarouselCard />
      <OverviewCarouselCard />
    </div>
    <!-- Add Nav Arrows -->
    <!-- <div class="swiper-button-prev"></div> -->
    <!-- <div class="swiper-button-next"></div> -->
  </div>
  <!-- END Swiper -->
</template>

<script>
import Swiper from 'swiper';
import OverviewCarouselCard from '@/components/OverviewCarouselCard.vue';

export default {
  name: 'OverviewCarousel',
  mounted() {
    this.$nextTick(() => {
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 8,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 320px
          100: {
            slidesPerView: 2,
            spaceBetween: 15,
            centeredSlides: true,
            initialSlide: 1,
          },
          // when window width is >= 640px
          600: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          // when window width is >= 1000px
          1000: {
            spaceBetween: 30,
            centeredSlides: false,
            initialSlide: 0,
          },
          // when window width is >= 1900px
          1400: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
      swiper.init();
    });
  },
  components: { OverviewCarouselCard },
};
</script>

<style lang="stylus" scoped>
.swiper-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1em;
  padding: 0;
  position: relative;

  // border: solid thin green;
  .swiper-wrapper {
    // min-height: 100px;
    width: 100%;

    // background: cyan;
    .swiper-slide {
      position: relative;
      height: 100%;
      /* Center slide text vertically */
      transition: all 0.3s ease-in-out;
    }

    .swiper-slide:hover {
      transform: scale(0.95);
    }
  }
}
</style>
