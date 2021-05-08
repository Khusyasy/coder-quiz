<template>
  <p
    :class="{ answer: true, wrong: wrong, correct: correct }"
    v-if="text"
    @click="clicked"
  >
    {{ text }}
  </p>
</template>

<script>
import { useSound } from "@vueuse/sound";
import correctSfx from "../assets/sfx/correct.mp3";
import incorrectSfx from "../assets/sfx/incorrect.mp3";

export default {
  name: "Answer",
  props: ["text", "option"],
  data() {
    return {
      correct: false,
      wrong: false,
    };
  },
  setup() {
    const { play: playCorrectSfx } = useSound(correctSfx);
    const { play: playIncorrectSfx } = useSound(incorrectSfx);

    return {
      playCorrectSfx,
      playIncorrectSfx,
    };
  },
  methods: {
    clicked() {
      if (this.$store.state.submiting) {
        return false;
      }
      this.$store.commit("submitingSet", true);

      var correct_answers = this.$store.state.quiz?.correct_answers;
      if (correct_answers.indexOf(this.option) > -1) {
        this.playCorrectSfx();
        this.correct = true;
        this.$store.commit("scoreAdd", 100);
      } else {
        this.playIncorrectSfx();
        this.wrong = true;
        this.$store.commit("scoreSub", 25);
      }

      setTimeout(() => {
        this.$store.dispatch("setNextQuiz");
        this.correct = false;
        this.wrong = false;
        this.$store.commit("submitingSet", false);
      }, 500);
      this.$store.dispatch("getRandomQuiz", {
        tag: this.$store.state.tag,
        diff: this.$store.state.diff,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";
.answer {
  background-color: $green;
  color: $white;
  transition: ease-in-out 150ms;
  width: 100%;
  border: 2px solid $green-l;
  padding: 1rem 0;
  margin: 1rem 0;
  font-family: $font-code;
  font-size: 1.2rem;
  text-justify: inter-word;
  cursor: pointer;

  @include for-desktop {
    &:hover {
      background-color: $green-l;
      color: $black;
    }
  }

  &.wrong {
    background-color: $red-l;
    color: $black;
  }

  &.correct {
    background-color: $green-d;
    color: $white;
  }
}
</style>
