<template>
  <div class="d-flex justify-content-end mt-5">
    <div class="btn-group">
      <button type="button" class="btn btn-outline-secondary"
              @click="tableActive"
              v-bind:class="{active: isTableActive}">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-table" viewBox="0 0 16 16">
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2
          2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1
          1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0
          1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4
          4H6v3h4V8z"></path>
        </svg>
        <span class="visually-hidden">Button</span>
      </button>
      <button type="button"
              class="btn btn-outline-secondary"
              @click="listActive"
              v-bind:class="{active: isListActive}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1
          .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5
          0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
          <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5
          8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0
          1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5
          0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0
          1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
        </svg>
        <span class="visually-hidden">Button</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Switcher',
  props: {
    msg: String,
  },
  data() {
    return {
      isTableActive: true,
      isListActive: false,
    };
  },
  methods: {
    tableActive() {
      if (!this.isTableActive) {
        this.isTableActive = true;
        this.isListActive = false;
        this.$emit('tableActive');
      }
    },
    listActive() {
      if (!this.isListActive) {
        this.isListActive = true;
        this.isTableActive = false;
        this.$emit('listActive');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .active {
    color: var(--bs-btn-hover-color);
    background-color: var(--bs-btn-hover-bg);
    border-color: var(--bs-btn-hover-border-color);
  }
</style>
