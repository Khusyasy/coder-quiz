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
  background-color: $green-l;
  color: $black;
  width: 100%;
  border-top: 1px solid $green-d;
  border-bottom: 1px solid $green-d;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  cursor: pointer;

  &:hover {
    background-color: $green;
    color: $white;
  }
}
</style>
