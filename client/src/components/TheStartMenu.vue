<template>
  <div class="start-menu">
    <p>Choose a category</p>
    <form class="container">
      <div class="btn-container" v-for="cat in catItems" :key="cat">
        <input
          :id="cat"
          name="categories"
          :value="cat"
          type="radio"
          v-model="catSelected"
          @click="playClickSfx"
        />
        <label :for="cat">{{ cat }}</label>
      </div>
      <div class="btn-container">
        <input
          id="randomCat"
          name="categories"
          value=""
          type="radio"
          v-model="catSelected"
          @click="playClickSfx"
        />
        <label for="randomCat">Random</label>
      </div>
    </form>
    <p>Choose a difficulty</p>
    <form class="container">
      <div class="btn-container" v-for="diff in diffItems" :key="diff">
        <input
          :id="diff"
          name="diff"
          :value="diff"
          type="radio"
          v-model="diffSelected"
          @click="playClickSfx"
        />
        <label :for="diff">{{ diff }}</label>
      </div>
      <div class="btn-container">
        <input
          id="randomDiff"
          name="diff"
          value=""
          type="radio"
          v-model="diffSelected"
          @click="playClickSfx"
        />
        <label for="randomDiff">Random</label>
      </div>
    </form>
    <button class="btn-play" @click="play">PLAY</button>
    <router-link :to="{ name: 'About' }" class="link">How to play</router-link>
  </div>
</template>

<script>
import { useSound } from "@vueuse/sound";
import clickSfx from "../assets/sfx/click.mp3";

export default {
  name: "StartMenu",
  data() {
    return {
      catItems: ["Linux", "PHP", "HTML", "Javascript"],
      catSelected: "",
      diffItems: ["Hard", "Medium", "Easy"],
      diffSelected: "",
    };
  },
  setup(){
    const { play: playClickSfx } = useSound(clickSfx);

    return{
      playClickSfx
    }
  },
  methods: {
    async play() {
      this.playClickSfx();

      this.$store.commit("diffSet", this.diffSelected);
      this.$store.commit("tagSet", this.catSelected);
      this.$store.commit("playSet", true);
      await this.$store.dispatch("getRandomQuiz", {
        tag: this.catSelected,
        diff: this.diffSelected,
      });

      this.$store.dispatch("stopCountdown");
      this.$store.commit("scoreSet", 0);
      this.$store.dispatch("setNextQuiz");
      this.$store.commit("timeSet", 60);
      this.$store.dispatch("startCountdown");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";
.start-menu {
  margin: 1rem;
  color: $white;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 2rem;
  justify-content: space-evenly;
  margin-bottom: 1.5rem;

  & input {
    display: none;
  }

  & label {
    background-color: $green;
    color: $white;
    transition: ease-in-out 150ms;
    width: 100%;
    border: 2px solid $green-l;
    padding: 0.5rem;
    margin: 0.5rem;
    font-family: $font-code;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      background-color: $green-l;
      color: $black;
    }
  }

  input:checked + label {
    background-color: $green-l;
    color: $black;
  }
}

.btn-play {
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

.link{
  display: block;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  color: $white;
}
</style>
