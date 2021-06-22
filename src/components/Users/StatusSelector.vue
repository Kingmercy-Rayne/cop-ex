<template>
  <div class="status-selector">
    <div class="option-item">
      <span class="option-title h6">Status</span>
      <select
        name="status"
        id="status"
        class="label shadow--default"
        @change="onChange($event)"
        v-model="selected"
      >
        <option value="0" class="h6 is-active">Active</option>
        <option value="1" class="h6 is-archived">Archived</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusSelector',
  data() {
    return {
      selected: this.isArchived,
    };
  },
  props: {
    isArchived: {
      type: String,
      default: '1',
    },
  },
  methods: {
    onChange(event) {
      this.selected = event.target.value;
      //   window.alert(this.status);
    },
  },
};
</script>

<style lang="stylus" scoped>
.status-selector {
  display: flex;
  flex-direction: column;

  .option-item {
    display: flex;
    flex-direction: column;
    margin-right: 4vw;
    min-width: 8vw;

    .option-title {
      color: var(--text-color--alt);
      // color: var(--semantic-color--success);
      font-family: var(--font-family--alt);
      padding: 0.2vh 0.2vw;
    }

    select {
      border-radius: 8px;
      padding: 0.8vh 0.2vw;
      border: none;
      color: var(--text-color--alt);
    }

    .is-active {
      color: var(--semantic-color--success);
    }

    .is-archived {
      color: var(--secondary-color);
    }
  }
}
</style>
