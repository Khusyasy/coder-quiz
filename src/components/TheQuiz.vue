<template>
  <div class="quiz">
    <div v-if="$store.state.play">
      <h1>
        {{ $store.state.quiz?.question || 'Loading...' }}
      </h1>
      <Answer v-for="(answer, option) in $store.state.quiz?.answers" :key="option" :text="answer" :option="option" />
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
.btn-play{
  background-color: $green;
  color: $white;
  transition: ease-in-out 150ms;
  width: 100%;
  border: 2px solid $green-l;
  padding: 0.5rem 0;
  font-family: $font-code;
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    background-color: $green-l;
    color: $black;
  }
}
</style>
