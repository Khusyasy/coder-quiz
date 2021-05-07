<template>
  <div class="quiz">
    <div v-if="$store.state.play">
      <div class="question">
        <p class="quiz-info">{{ $store.state.tag || 'Random' }} {{ $store.state.diff || 'Random' }}</p>
        <h1>
          {{ $store.state.quiz?.question || 'Loading...' }}
        </h1>
        <Answer v-for="(answer, option) in $store.state.quiz?.answers" :key="option" :text="answer" :option="option" />
      </div>
      </div>
    <div v-else>
      <StartMenu />
    </div>
  </div>
</template>

<script>
import Answer from './Answer'
import StartMenu from './TheStartMenu'

export default {
  name: 'Quiz',
  components: {
    Answer,
    StartMenu
  },
}
</script>

<style lang="scss" scoped>
@import "../variables";
.quiz-info{
  position: absolute;
  top: 0;
  color: $white;
  font-family: $font-code;
  font-size: 0.9rem;
  padding: 0.1rem;
}
h1 {
  color: $white;
  font-family: $font-code;
  padding: 1rem;
  font-size: 1.5rem;
  @include for-desktop{
    font-size: 2rem;
  }
}
.quiz {
  width: 100%;
  background-color: $green;
  position: relative;
  max-width: 70ch;
  border-radius: 5px;
  @include for-desktop {
    min-width: 70ch;
  }
}
.question{
  margin: 1rem;
}
</style>
