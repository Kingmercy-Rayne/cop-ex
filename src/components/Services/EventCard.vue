<template>
  <div class="event-card shadow--default">
    <div class="event-card__section1">
      <div class="section1__top">
        <!-- <img class="avatar" src="@/assets/img/cesar-rincon-XHVpWcr5grQ-unsplash.jpg" /> -->
        <DepartmentCrest department="ec" />
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
    <div class="event-card__section2"></div>
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
};
</script>

<style lang="stylus" scoped>
.event-card {
  min-width: 45vw;
  min-height: 25vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--bg-color--alt);
  border-radius: 8px;
  padding: 3vh 2vw;
  margin: 1vh 0;

  .event-card__section1 {
    min-height: 20vh;
    min-width: 28vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .section1__top {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .avatar {
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
}
</style>
