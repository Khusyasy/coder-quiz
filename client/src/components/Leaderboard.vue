<template>
  <div class="leaderboard">
    <h3 class="title">Leaderboard</h3>
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Score</th>
          <th>Category</th>
          <th>Difficulty</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="score in scores" :key="score._id">
          <td>{{ score.rank || "unknown" }}</td>
          <td>{{ score.user?.username || "unknown" }}</td>
          <td>{{ score.score }}</td>
          <td>{{ score.category }}</td>
          <td>{{ score.difficulty }}</td>
        </tr>
      </tbody>
    </table>
    <template v-if="allowSubmit">
      <button @click="submitScore" v-if="$cookies.isKey('jwt')">
        Submit your score
      </button>
      <button v-else>Login and Submit your score</button>
    </template>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Leaderboard",
  data() {
    return {
      scores: [],
    };
  },
  props: {
    tag: String,
    diff: String,
    allowSubmit: Boolean,
  },
  async created() {
    await this.getScores();
  },
  methods: {
    async getScores() {
      var res = await axios.get(
        `api/scores?tag=${this.tag || "Random"}&diff=${this.diff || "Random"}`
      );
      this.scores = res.data;
    },
    async submitScore() {
      var res = await axios({
        method: "POST",
        url: `api/scores/${this.$store.state.tag || "Random"}/${
          this.$store.state.diff || "Random"
        }`,
        withCredentials: true,
        data: `score=${this.$store.state.score}`,
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      });
      await this.getScores();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";

.leaderboard {
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
  max-height: 50vh;
  max-width: 50vw;
  margin: 1rem;
  border: 1px solid $green-l;
  background-color: $green;
  border-radius: 5px;
}

.title {
  color: $white;
}

table {
  width: calc(100% - 2rem);
  margin: 1rem;
  border: 1px solid $green-d;
  color: $white;
  border-collapse: collapse;

  th {
    border: 1px solid $green-d;
    background-color: $green-d;
  }

  td {
    border-bottom: 1px solid $green-d;
  }

  th,
  td {
    padding: 0.25rem;
  }
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
