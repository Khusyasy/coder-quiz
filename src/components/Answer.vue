<template>
  <p :class="{answer: true, wrong: wrong, correct: correct}" v-if="text" @click="clicked">
    {{text}}
  </p>
</template>

<script>
export default {
  name: 'Answer',
  props: ['text', 'option'],
  data(){
    return {
      correct: false,
      wrong: false,
    }
  },
  methods: {
    async clicked(){
      if(this.$store.state.quiz?.correct_answer == this.option){
        this.correct = true;
        await this.$store.commit('scoreAdd', 100);
      }else{
        this.wrong = true;
        await this.$store.commit('scoreSub', 25);
      }
      await this.$store.dispatch('getRandomQuiz');
      this.correct = false;
      this.wrong = false;
    }
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

  &.wrong{
    background-color: $red-l;
    color: $black;
  }

  &.correct{
    background-color: $green-d;
    color: $white;
  }
}
</style>
