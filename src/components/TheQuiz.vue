<template>
  <div class="quiz">
    <h1>
      {{question}}
    </h1>
    <Answer v-for="answer in answers" :key="answer.id" :text="answer.text" />
  </div>
</template>

<script>
import Answer from './Answer'

export default {
  name: 'Quiz',
  components: {
    Answer
  },
  data () {
    return {
      question: 'this is a question',
      answers: [
        { id: 1, text: 'hello' },
        { id: 2, text: 'test' },
        { id: 3, text: 'mote' },
        { id: 4, text: 'yesyee' }
      ]
    }
  }
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
