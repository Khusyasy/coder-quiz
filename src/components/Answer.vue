<template>
  <p class="answer">
    {{text}}
  </p>
</template>

<script>
export default {
  name: 'Answer',
  props: {
    text: String
  }
}
</script>

<style lang="scss" scoped>
@import "../variables";
.answer {
  background-color: $green;
  color: $white;
  width: 100%;
  border-top: 1px solid $green-l;
  border-bottom: 1px solid $green-l;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  cursor: pointer;

  &:hover {
    background-color: $green-l;
    color: $black;
  }
}
</style>
