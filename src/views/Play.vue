<template>
  <div class="play">
    <GameBar />
    <Quiz />
  </div>
</template>

<script>
import Quiz from "../components/TheQuiz";
import GameBar from "../components/TheGameBar";

export default {
  name: "Play",
  components: {
    Quiz,
    GameBar,
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";

.play {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: calc(100vh - 4rem);
}
</style>
