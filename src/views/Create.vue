<template>
  <form class="create view">
    <div class="create__header">
      <DashboardHeader title="New Event" subtitle="Parameters for new event" />
      <div class="button-row">
        <IconButton is-compact icon="la-plus" is-reversse text="Create" />
        <IconButton is-compact icon="la-ban" is-plain text="Cancel" is-semantic-failure />
      </div>
    </div>
    <div class="create-section date-section">
      <div class="input-item">
        <span class="input-title h6">Status</span>
        <DatePicker v-model="time1" />
      </div>
      <div class="input-item">
        <span class="input-title h6">Status</span>
        <VueTimepicker format="hh:mm A" />
      </div>
      <div class="input-item">
        <span class="input-title h6">Academic Year</span>
        <select name="status" id="status" class="label shadow--default">
          <option value="All">2016</option>
        </select>
      </div>
      <div class="input-item">
        <span class="input-title h6">Semester</span>
        <select name="status" id="status" class="label shadow--default">
          <option value="All">1st</option>
        </select>
      </div>
    </div>
  </form>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader.vue';
import IconButton from '@/components/IconButton.vue';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
// Main JS (in UMD format)
// import VueTimepicker from 'vue2-timepicker';
// CSS
// import 'vue2-timepicker/dist/VueTimepicker.css';
import VueTimepicker from 'vue2-timepicker/src/vue-timepicker.vue';

export default {
  name: 'Create',
  components: {
    DashboardHeader,
    IconButton,
    DatePicker,
    VueTimepicker,
  },
  data() {
    return {
      time1: null,
    };
  },
};
</script>

<style lang="stylus" scoped>
.create {
  .create__header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      margin-left: 2vw;
    }

    .button-row {
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }

  .input-item {
    display: flex;
    flex-direction: column;
    margin-right: 4vw;
    min-width: 8vw;

    .option-title {
      color: var(--text-color--primary);
      // color: var(--semantic-color--success);
      font-family: var(--font-family--alt);
      padding: 0.2vh 0.2vw;
    }

    select {
      border-radius: 8px;
      padding: 0.8vh 0.2vw;
      border: none;
      color: var(--text-color--primary);
    }
  }

  .date-section {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
