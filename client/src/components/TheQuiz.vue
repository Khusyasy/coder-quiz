<template>
  <div class="quiz">
    <div v-if="$store.state.play">
      <div class="question">
        <p class="quiz-info">
          {{ $store.state.tag || "Random" }} {{ $store.state.diff || "Random" }}
        </p>
        <h1>
          {{ $store.state.quiz?.question || "Loading..." }}
        </h1>
        <Answer
          v-for="answer in $store.state.quiz?.answers"
          :key="answer.option"
          :text="answer.answer"
          :option="answer.option"
        />
      </div>
    </div>
    <div v-else-if="$store.state.score !== 0">
      <EndMenu />
    </div>
    <div v-else>
      <StartMenu />
    </div>
  </div>
</template>

<script>
import Answer from "./Answer";
import StartMenu from "./TheStartMenu";
import EndMenu from "./TheEndMenu";

export default {
  name: "Quiz",
  components: {
    Answer,
    StartMenu,
    EndMenu,
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";
.quiz-info {
  color: $white;
  font-family: $font-code;
  font-size: 0.9rem;
  margin: 0;
  text-align: left;
}
h1 {
  color: $white;
  font-family: $font-code;
  padding: 1rem;
  font-size: 1.5rem;
  @include for-desktop {
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
.question {
  margin: 1rem;
}
</style>
