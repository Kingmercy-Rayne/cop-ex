<template>
  <div class="event-card shadow--default" @click="visitRoute">
    <div class="event-card__section1">
      <div class="section1__top">
        <!-- <img class="avatar" src="@/assets/img/cesar-rincon-XHVpWcr5grQ-unsplash.jpg" /> -->
        <DepartmentCrest department="" />
        <div class="section1__top__text">
          <div class="description h5">
            Steps towards making machine learning more natural Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Aliquam dolor soluta iure consequuntur maxime, est non
            laborum? Quasi, vitae incidunt?
          </div>
          <div class="location h6"><i class="las la-map-marker"></i>SMX Convention Center</div>
        </div>
      </div>
      <div class="section1__bottom">
        <EventCardSnack title="Registered Participants" value="50" />
        <EventCardSnack title="Registered Participants" value="50" />
      </div>
    </div>
    <!-- ========= -->
    <!-- Section 2 -->
    <div class="event-card__section2">
      <div class="section2__top">
        <span class="date-header label">Date</span>
        <span class="date-value h4">3/5/2020</span>
      </div>
      <div class="section2__bottom"></div>
    </div>
  </div>
</template>

<script>
import EventCardSnack from '@/components/Services/EventCardSnack.vue';
import DepartmentCrest from '@/components/Services/DepartmentCrest.vue';

export default {
  name: 'EventCard',
  components: {
    EventCardSnack,
    DepartmentCrest,
  },
  methods: {
    visitRoute() {
      //   if (this.$route.path !== '/logout') {
      //     this.$router.push(routePath);
      //   }
      this.$router.push('/event/:id');
    },
  },
};
</script>

<style lang="stylus" scoped>
.event-card {
  --section-spacing-vertical: 3vh;
  --section-spacing-horizontal: 2vw;
  min-width: 45vw;
  min-height: 25vh;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background: var(--bg-color--alt);
  border-radius: 8px;
  // padding: 0 2vw;
  margin: 1vh 0;
  cursor: pointer;

  .event-card__section1 {
    min-height: 20vh;
    min-width: 28vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: var(--section-spacing-vertical) 0;
    margin: 0 var(--section-spacing-horizontal);

    .section1__top {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .section1__top__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 0 0.8vw;

        .description {
          max-width: 30vw;
          text-overflow: ellipsis; /* Needed to make it work */
          overflow: hidden;
          white-space: nowrap;
        }

        .location {
          margin-top: 0.2vh;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          max-width: 25vw;
          text-overflow: ellipsis; /* Needed to make it work */
          overflow: hidden;
          white-space: nowrap;

          i {
            font-size: 1.7rem;
            // font-weight: 700;
            padding: 0.2em 0;
            margin-right: 0.6vw;
            color: var(--text-color--primary);
          }
        }

        .location span {
        }
      }
    }

    .section1__bottom {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-top: 4vh;
    }
  }

  .event-card__section2 {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 20vh;
    min-width: 8vw;
    padding: var(--section-spacing-vertical) 0;
    padding: 0 var(--section-spacing-horizontal);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border-left: solid thin var(--neutral-grey--light);
      opacity: 0.1;
    }

    .section2__top {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .date-header {
        color: var(--primary-color);
        color: var(--text-color--primary);
      }

      .date-value {
        margin: 1vh 0;
        color: var(--text-color--primary);
      }
    }

    .section2__bottom {
    }
  }
}
</style>
