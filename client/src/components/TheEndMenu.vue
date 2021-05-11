<template>
  <div class="end-menu">
    <h1>Time's Up</h1>
    <Leaderboard />
    <button @click="newGame">New Game</button>
  </div>
</template>

<script>
import { useSound } from "@vueuse/sound";
import clickSfx from "../assets/sfx/click.mp3";

import Leaderboard from "./Leaderboard";

export default {
  name: "EndMenu",
  setup() {
    const { play: playClickSfx } = useSound(clickSfx);

    return {
      playClickSfx,
    };
  },
  components: {
    Leaderboard,
  },
  methods: {
    newGame() {
      this.playClickSfx();
      this.$store.commit("scoreSet", 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";
.end-menu {
  margin: 1rem;
  color: $white;
}
button {
  background-color: $green;
  color: $white;
  transition: ease-in-out 150ms;
  width: 100%;
  border: 2px solid $green-l;
  padding: 0.5rem 0;
  font-family: $font-code;
  cursor: pointer;

  &:hover {
    background-color: $green-l;
    color: $black;
  }
}
</style>
