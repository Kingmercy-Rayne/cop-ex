<template>
  <form class="create view" @submit.prevent="">
    <div class="create__header">
      <DashboardHeader title="New Event" subtitle="Parameters for new event" />
      <div class="button-row">
        <IconButton is-compact icon="la-plus" is-reversse text="Create" />
        <IconButton is-compact icon="la-ban" is-plain text="Cancel" is-semantic-failure />
      </div>
    </div>
    <div class="is-general">
      <input type="checkbox" id="general" name="general" value="" />
      <label for="general">General Event</label>
    </div>
    <div class="date-section">
      <div class="input-item">
        <label class="input-title h6">Date</label>
        <DatePicker v-model="time1" />
      </div>
      <div class="input-item">
        <label class="input-title h6">Time</label>
        <VueTimepicker format="hh:mm A" />
      </div>
      <div class="input-item">
        <label class="input-title h6">Academic Year</label>
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
      <div class="input-item">
        <span class="input-title h6">Department</span>
        <select name="status" id="status" class="label shadow--default">
          <option value="All">AE</option>
          <option value="All">ARKI</option>
          <option value="All">CE</option>
        </select>
      </div>
    </div>
    <div class="create-section location-section shadow--default">
      <span class="create-section__header h4">Location</span>
      <div class="create-section__body">
        <div class="input-item">
          <label class="input-title h6">Location</label>
          <input type="text" class="h6" />
        </div>
        <div class="input-item">
          <label class="input-title h6">Speaker</label>
          <input type="text" class="h6" />
        </div>
      </div>
    </div>
    <div class="create-section participants-section shadow--default">
      <span class="create-section__header h4">In-Charge and Participants</span>
      <div class="create-section__body">
        <div class="input-item">
          <label class="input-title h6">Student</label>
          <input type="text" class="h6" />
        </div>
        <div class="input-item">
          <label class="input-title h6">Faculty</label>
          <input type="text" class="h6" />
        </div>
        <div class="input-item">
          <label class="input-title h6">Target Group</label>
          <input type="text" class="h6" />
        </div>
      </div>
    </div>
    <div class="create-section participants-section shadow--default">
      <span class="create-section__header h4">Description</span>
      <div class="create-section__body">
        <div class="input-item">
          <label class="input-title h6">Title</label>
          <!-- <textarea id="title" class="h6" name="description" rows="4" cols="50"></textarea> -->
          <input type="text" class="h6 input--expander" name="description" />
        </div>
        <div class="input-item">
          <label class="input-title h6">Description</label>
          <textarea id="description" class="h6" name="description" rows="4" cols="50"></textarea>
        </div>
      </div>
    </div>
    <div class="create-section participants-section shadow--default">
      <span class="create-section__header h4">Activities</span>
      <div class="create-section__body">
        <div class="input-item">
          <label class="input-title h6">Budget (&#8369;)</label>
          <!-- <textarea id="title" class="h6" name="description" rows="4" cols="50"></textarea> -->
          <input type="number" class="h6 input--expander" name="budget" />
        </div>
        <div class="input-item">
          <label class="input-title h6">Activities</label>
          <textarea id="activities" class="h6" name="activities" rows="4" cols="50"></textarea>
        </div>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .create__header {
    width: 100%;
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
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .create-section {
    border-radius: 8px;
    max-width: 90%;
    background: var(--bg-color--alt);
    margin-top: 2vh;
    padding: 2em;
    display: flex;
    flex-direction: column;

    .create-section__header {
    }

    .create-section__body {
      margin-top: 2vh;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      max-width: 70vw;

      .input-item {
        display: flex;
        flex-direction: column;
        margin-top: 1vh;

        .input-title {
          // color: var(--text-color--primary);
          color: var(--text-color--alt);
        }

        input {
          width: 15vw;
          padding: 1vh 1em;
          border: none;
          outline: none;
          background: var(--bg-color--primary);
          border-radius: 8px;
          // color: var(--text-color--alt);
          color: var(--text-color--primary);
        }

        .input--expander {
          // width: 25vw;
        }

        textarea {
          padding: 1vh 1em;
          border: none;
          outline: none;
          background: var(--bg-color--primary);
          border-radius: 8px;
          // color: var(--text-color--alt);
          color: var(--text-color--primary);
          max-width: 70vw;
        }
      }
    }
  }

  .date-section {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .title-section {
    display: flex;
  }

  .participants-section {
    .input-item {
      .input-title {
        // color: var(--text-color--primary);
        // color: var(--text-color--alt);
      }

      input {
      }

      .input--expander {
        // width: 25vw;
      }

      textarea {
      }
    }
  }
}
</style>
