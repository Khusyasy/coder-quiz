<template>
  <div class="game-bar">
    <p>Score: <span class="big">{{score}}</span></p>
    <p>Time: <span class="big">{{time}}</span> s</p>
  </div>
</template>

<script>
export default {
  name: 'GameBar',
  data () {
    return {
      score: 0,
      time: 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../variables";

.game-bar {
  width: 100%;
  max-width: 45ch;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  color: $white;
  background-color: $green;
  border-radius: 5px;
  margin: 0.5rem;

  p{
    padding: 0.1rem 0.5rem;
  }

  .big{
    font-size: 1.75rem;
  }
}
</style>
