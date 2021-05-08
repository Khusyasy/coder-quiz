<template>
  <div class="game-bar">
    <p>
      Score: <span class="big">{{ $store.state.score }}</span>
    </p>
    <p>
      Time: <span class="big">{{ $store.state.time }}</span> s
    </p>
  </div>
</template>

<script>
export default {
  name: "GameBar",
};
</script>

<style lang="scss" scoped>
@import "../variables";

.game-bar {
  width: 100%;
  max-width: 70ch;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
  color: $white;
  background-color: $green;
  border-radius: 5px;
  margin: 1rem 0;

  p {
    padding: 0.1rem 0.5rem;
  }

  .big {
    font-size: 1.75rem;
  }
}
</style>
