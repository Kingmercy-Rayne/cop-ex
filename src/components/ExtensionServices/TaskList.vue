<template>
  <div class="task-list">
    <button class="tag-header h5 shadow--default">Upcoming</button>
    <div class="table">
      <div class="todo-header">
        <span class="label action"></span>
        <span class="label">Date</span>
        <span class="label">Time</span>
        <span class="label">Speaker</span>
        <span class="label title">Title</span>
        <span class="label">Location</span>
        <span class="label">Registered</span>
      </div>
      <div class="todo-row">
        <span class="label action"></span>
        <span class="h6">12/03/2022</span>
        <span class="h6">1pm-3pm</span>
        <span class="h6">Dr. Sarah Leipzig</span>
        <span class="h6 title">
          Establishing the Essential Hardware Primitives for Quantum-Proof Secure Computer Systems
        </span>
        <span class="h6">Ernesto Palanca Hall</span>
        <span class="h6">9</span>
      </div>
      <div class="todo-row">
        <span class="label action"></span>
        <span class="h6">23/03/2022</span>
        <span class="h6">1pm-3pm</span>
        <span class="h6">Engr. Robert Theodore</span>
        <span class="h6 title"> Steps towards making machine learning more natural </span>
        <span class="h6">SMX Convention Center</span>
        <span class="h6">13</span>
      </div>
    </div>
    <button class="tag-header h5 shadow--default">Completed</button>
    <div class="table">
      <div class="todo-header">
        <span class="label action"></span>
        <span class="label">Date</span>
        <span class="label">Time</span>
        <span class="label">Speaker</span>
        <span class="label title">Title</span>
        <span class="label">Location</span>
        <span class="label">Registered</span>
      </div>
      <div class="todo-row">
        <span class="label action"></span>
        <span class="h6">18/02/2021</span>
        <span class="h6">2pm-5pm</span>
        <span class="h6">Dr. Sarah Leipzig</span>
        <span class="h6 title">
          Establishing the Essential Hardware Primitives for Quantum-Proof Secure Computer Systems
        </span>
        <span class="h6">Ernesto Palanca Hall</span>
        <span class="h6">41</span>
      </div>
      <div class="todo-row">
        <span class="label action"></span>
        <span class="h6">8/03/2021</span>
        <span class="h6">9am-5pm</span>
        <span class="h6">Engr. Robert Theodore</span>
        <span class="h6 title"> Steps towards making machine learning more natural </span>
        <span class="h6">SMX Convention Center</span>
        <span class="h6">32</span>
      </div>
      <div class="todo-row">
        <span class="label action"></span>
        <span class="h6">18/03/2021</span>
        <span class="h6">9am-2pm</span>
        <span class="h6">Engr. Robert Theodore</span>
        <span class="h6 title">
          Embracing Low Inertia in Power System Frequency Control: A Dynamic Droop Approach
        </span>
        <span class="h6">SMX Convention Center</span>
        <span class="h6">23</span>
      </div>
      <div class="todo-row">
        <span class="label action"></span>
        <span class="h6">21/04/2021</span>
        <span class="h6">1pm-3pm</span>
        <span class="h6">Engr. Robert Theodore</span>
        <span class="h6 title"> Data-powered smart grids and communities </span>
        <span class="h6">SMX Convention Center</span>
        <span class="h6">48</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
};
</script>

<style lang="stylus" scoped>
.task-list {
  width: 100%;

  .tag-header {
    // border: solid thin var(--border-color--primary);
    border-radius: 8px;
    padding: 0.5em 1em;
    background: var(--bg-color--tri);
    margin-top: 4vh;
  }

  .table {
    width: 100%;
    margin-top: 2vh;

    .todo-header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      text-align: center;

      span {
        padding: 0.9em 0;
        text-align: center;
        flex-grow: 1;
        flex: 8%;
      }

      .title {
        flex-grow: 5;
      }

      .action {
        padding: 0;
        flex-grow: 0;
        flex: 10px;
      }
    }

    .todo-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      text-align: center;

      span {
        padding: 0.9em 0;
        text-align: center;
        flex: 5%;
        flex-grow: 1;
      }

      .action {
        padding: 0;
        flex-grow: 0;
        flex: 10px;
      }

      .title {
        flex-grow: 5;
        text-transform: capitalize;
      }
    }
  }
}
</style>
