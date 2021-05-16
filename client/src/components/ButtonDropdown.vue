<template>
  <div class="dropdown-container">
    <span>
      <slot name="btn"></slot>
    </span>
    <div class="dropdown" v-if="isOpen">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "ButtonDropdown",
  props: {
    isOpen: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";

.dropdown-container {
  display: inline-block;
  position: relative;
  margin: 0;
  padding: 0;
  z-index: 1000;

  & .dropdown {
    display: flex;
    flex-direction: column;
    position: absolute;
    row-gap: 0.5rem;
    width: max-content;
    right: 0;
    top: 3rem;
    padding: 1rem;
    background-color: $green;
    border: 1px solid $green-l;
    border-radius: 5px;
    transition: all 150ms ease-in-out;
  }
}
</style>
