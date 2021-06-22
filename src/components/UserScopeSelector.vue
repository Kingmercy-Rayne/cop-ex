<template>
  <div class="user-scope-selector">
    <article
      class="user-scope-selector-card"
      :class="[status === '0' ? 'shadow--default selector-card--is-active' : '']"
      @click="selectGuest"
    >
      <div class="selector-card__image">
        <img class="avatar" :src="require(`@/assets/img/error-lamp-robot.svg`)" />
      </div>
      <div class="selector-card__text">
        <h5 class="selector-card__text__header h4">Guest</h5>
        <div class="selector-card__text__row">
          <i class="la las la-check"></i>
          <span class="text__row__value h6">Can View events</span>
        </div>
        <div class="selector-card__text__row">
          <i class="la las la-check"></i>
          <span class="text__row__value h6">Can Generate reports</span>
        </div>
      </div>
    </article>
    <article
      class="user-scope-selector-card"
      :class="[status === '1' ? 'shadow--default selector-card--is-active' : '']"
      @click="selectStandard"
    >
      <div class="selector-card__image">
        <img class="avatar" :src="require(`@/assets/img/error-lamp-robot.svg`)" />
      </div>
      <div class="selector-card__text">
        <h5 class="selector-card__text__header h4">Standard</h5>
        <div class="selector-card__text__row">
          <i class="la las la-check"></i>
          <span class="text__row__value h6">Can View events</span>
        </div>
        <div class="selector-card__text__row">
          <i class="la las la-check"></i>
          <span class="text__row__value h6">Can Generate reports</span>
        </div>
        <div class="selector-card__text__row">
          <i class="la las la-check"></i>
          <span class="text__row__value h6">Can Create events</span>
        </div>
        <div class="selector-card__text__row">
          <i class="la las la-check"></i>
          <span class="text__row__value h6">Can Update events</span>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'UserScopeSelector',
  data() {
    return {
      status: this.canEdit,
    };
  },
  props: {
    canEdit: {
      type: String,
      default: '0',
    },
  },
  methods: {
    selectGuest() {
      if (this.status !== '0') {
        this.status = '0';
      }
    },
    selectStandard() {
      if (this.status !== '1') {
        this.status = '1';
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.user-scope-selector {
  // width: 50vw;
  min-height: calc(20vh + 100px);
  align-self: center;
  display: flex;
  justify-content: center;
  margin-top: 2vh;

  .user-scope-selector-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: solid thin var(--bg-color--primary);
    padding: 2.8rem 1.8rem;
    margin-right: 4vw;
    border-radius: 8px;

    .selector-card__image {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        vertical-align: middle;
        width: 10rem;
        height: 10rem;
        // width: max(2rem, 35px);
        // height: max(3rem, 35px);
        width: clamp(6rem, 130px, 12rem);
        height: clamp(6rem, 130px, 12rem);
        border-radius: 50%;
      }
    }

    .selector-card__text {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      text-align: start;

      .selector-card__text__header {
        align-self: center;
        color: var(--text-color--alt);
        margin: 1vh 0;
      }

      .selector-card__text__row {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        i {
          margin-right: 1vw;
          font-size: 1.2rem;
          color: var(--semantic-color--success);
        }
      }
    }
  }

  .selector-card--is-active {
    border: solid thin var(--text-color--alt);
  }
}
</style>
