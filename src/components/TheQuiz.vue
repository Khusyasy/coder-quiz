<template>
  <div class="quiz">
    <button @click="$store.dispatch('getRandomQuiz')">CLICK</button>
    <h1>
      {{ $store.state.quiz?.question }}
    </h1>
    <Answer v-for="(answer, option) in $store.state.quiz?.answers" :key="option" :text="answer" />
  </div>
</template>

<script>
import Answer from './Answer'

export default {
  name: 'Quiz',
  components: {
    Answer
  },
}
</script>

<style lang="scss" scoped>
@import "../variables";
h1 {
  color: $white;
}
.quiz {
  max-width: 70ch;
  min-width: 45ch;
  background-color: $green;
  border-radius: 5px;
  padding: 2rem;
}
</style>
