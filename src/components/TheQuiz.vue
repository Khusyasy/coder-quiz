<template>
  <div class="quiz">
    <h1>
      {{ $store.state.quiz?.question || 'Loading...' }}
    </h1>
    <Answer v-for="(answer, option) in $store.state.quiz?.answers" :key="option" :text="answer" :option="option" />
  </div>
</template>

<script>
import Answer from './Answer'

export default {
  name: 'Quiz',
  components: {
    Answer
  },
  created() {
    this.$store.dispatch('getRandomQuiz');
  }
}
</script>

<style lang="scss" scoped>
@import "../variables";
h1 {
  color: $white;
  font-family: $font-code;
  padding: 1rem;
}
.quiz {
  max-width: 70ch;
  min-width: 45ch;
  background-color: $green;
  border-radius: 5px;
  padding: 2rem;
}
</style>
