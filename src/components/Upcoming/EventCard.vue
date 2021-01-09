<template>
  <div
    class="event-card shadow--default"
    :class="{ 'event-card--alt': isActive }"
    @click="showSidebar"
    v-on-clickaway="hideSidebar"
    :draggable="this.isPending ? true : false"
  >
    <!-- <span
      class="event-card__divider"
      :style="this.program == 'cop' ? { background: 'var(--semantic-color--success)' } : ''"
    ></span> -->
    <div class="event-card__location">
      <span class="label">Mindoro</span>
      <i class="las la la-ellipsis-v"></i>
    </div>
    <h5 class="event-card__description">Basic electrical wiring and...</h5>
    <span class="p">Thursday, December 20</span>
    <div class="event-card__bottom">
      <img class="avatar" src="@/assets/img/cesar-rincon-XHVpWcr5grQ-unsplash.jpg" />
      <div class="review-tag shadow--alt" v-if="!hasConceptPaper">
        <!-- <span>Approve</span> -->
        <i class="fa fas fa-check"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'EventCard',
  mixins: [clickaway],
  props: {
    program: {
      type: String,
      default: 'cop',
      required: true,
    },
    isPending: {
      type: Boolean,
      default: false,
    },
    hasConceptPaper: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    showSidebar() {
      this.$store.commit('SHOW_UPCOMING_EVENT_SIDEBAR');
      this.isActive = true;
    },
    hideSidebar() {
      // this.$store.commit('HIDE_UPCOMING_EVENT_SIDEBAR');
      this.isActive = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.event-card {
  position: relative;
  flex-basis: 100%;
  background: var(--neutral-white);
  padding: 1em 0.5em 0.8em 1.5em;
  margin-top: 0.8em;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-color--alt);

  .event-card__location {
    display: flex;
    justify-content: space-between;
    align-items: center;

    i {
      // margin-right: 0.2em;
    }
  }

  .event-card__description {
    margin-top: 0.3em;
  }

  .event-card__bottom {
    margin-top: 0.3em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .avatar {
      vertical-align: middle;
      width: 3rem;
      height: 3rem;
      // width: max(2rem, 35px);
      // height: max(3rem, 35px);
      width: clamp(1.5rem, 20px, 2rem);
      height: clamp(1.5rem, 20px, 2rem);
      border-radius: 50%;
      // background: blue;
    }

    .review-tag {
      background: var(--bg-color--primary);
      color: var(--neutral-grey--dark);
      padding: 0.2em 0.3em;
      border-radius: 50%;
      margin-right: 0.3em;

      // margin-left: 0.5em;
      i {
        font-size: 14px;
        color: var(--text-color--alt);
      }
    }
  }

  .event-card__divider {
    position: absolute;
    // left: 2em;
    top: 5%;
    bottom: 5%;
    width: 25px;
    height: 2px;
    background: crimson;
    border-radius: 2px;
  }
}

.event-card--alt {
  background: var(--primary-color--lighter400);
  color: var(--text-color--tri);
}
</style>
