<template>
  <div class="leaderboard-page">
    <div class="container">
      <select name="cat" id="cat" v-model="catSelected">
        <option v-for="cat in catItems" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
      <select name="diff" id="diff" v-model="diffSelected">
        <option v-for="diff in diffItems" :key="diff" :value="diff">
          {{ diff }}
        </option>
      </select>
      <button @click="refreshLeaderboard">Find</button>
    </div>
    <div class="container">
      <Leaderboard
        :tag="catSelected"
        :diff="diffSelected"
        :allowSubmit="false"
        :key="leaderboardComponentKey"
      />
    </div>
  </div>
</template>

<script>
import Leaderboard from "../components/Leaderboard";

export default {
  name: "LeaderboardPage",
  components: {
    Leaderboard,
  },
  data() {
    return {
      catItems: ["Linux", "PHP", "HTML", "Javascript", "Random"],
      catSelected: "Random",
      diffItems: ["Hard", "Medium", "Easy", "Random"],
      diffSelected: "Random",
      leaderboardComponentKey: 0,
    };
  },
  methods: {
    refreshLeaderboard() {
      this.leaderboardComponentKey += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";

.leaderboard-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: calc(100vh - 4rem);
}

.container {
  width: 100%;
  max-width: 70ch;
  color: $white;
  background-color: $green;
  border-radius: 5px;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}

select,
button {
  color: $white;
  background-color: $green;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 2px solid $green-l;
  cursor: pointer;
}
</style>
