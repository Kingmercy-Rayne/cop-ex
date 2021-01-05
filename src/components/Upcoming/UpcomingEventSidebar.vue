<template>
  <div class="upcoming-event-sidebar shadow--default">
    <h4>Event Overview</h4>
    <div class="event__element">
      <i class="las la la-stopwatch"></i>
      <div class="element__text">
        <span class="label">Date</span>
        <p>Thursday, Dec 20 2021</p>
      </div>
    </div>
    <div class="event__element">
      <i class="las la la-users"></i>
      <div class="element__text">
        <span class="label">Community</span>
        <p>Mindoro</p>
      </div>
    </div>
    <div class="event__element">
      <i class="las la la-info"></i>
      <div class="element__text">
        <span class="label">Description</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos aperiam fugit esse quia
          exercitationem! Voluptates labore dolore eos.
        </p>
      </div>
    </div>
    <div class="event__element">
      <i class="las la la-user"></i>
      <div class="element__text">
        <span class="label">In Charge</span>
        <p>Lorenzo Romano</p>
      </div>
    </div>
    <div class="event__element">
      <i class="las la la-file-alt"></i>
      <div class="element__text">
        <span class="label">Completed Concept Paper?</span>
        <p>Yes</p>
      </div>
    </div>
    <div class="event__element created-by">
      <img class="avatar" src="@/assets/img/cesar-rincon-XHVpWcr5grQ-unsplash.jpg" />
      <div class="element__text">
        <span class="label">Event Logged by</span>
        <p>ESC President</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventSidebar',
};
</script>

<style lang="stylus" scoped>
.upcoming-event-sidebar {
  // TODO: remove magic numbers and add paddings as site variables
  // TODO: add clamp/max for height to combat resizing
  position: absolute;
  z-index: 10;
  right: 10px;
  top: 8px;
  bottom: 8px;
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 2em 2.2em;
  background: var(--primary-color--lighter400);
  color: var(--text-color--tri);
  // border: solid thin crimson;
  border-radius: 12px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  .event__element {
    display: flex;
    align-items: flex-start;
    margin-top: 2em;

    i {
      font-size: 1.4rem;
      padding: 0.4em;
      background: var(--primary-color--lighter300);
      border-radius: 8px;
    }

    span {
      margin-left: 1em;
      text-transform: capitalize;
    }

    p {
      margin-left: 0.8em;
    }

    .element__text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .created-by {
    margin-top: auto;
    align-items: center;

    .avatar {
      vertical-align: middle;
      // width: 3rem;
      // height: 3rem;
      width: clamp(1.5rem, 25px, 2rem);
      height: clamp(1.5rem, 25px, 2rem);
      margin-left: 0.2em;
      border-radius: 50%;
      // background: blue;
    }
  }
}
</style>
