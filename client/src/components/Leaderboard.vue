<template>
  <div class="leaderboard">
    <h3>Leaderboard</h3>
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
  async created() {
    var res = await axios.get(
      `api/scores?tag=${this.$store.state.tag}&diff=${this.$store.state.diff}`
    );
    this.scores = res.data;
  },
};
</script>

<style lang="scss" scoped>
@import "../variables";

.leaderboard {
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
  margin: 1rem;
  border: 1px solid $green-l;
}

table {
  height: calc(100% - 2rem);
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
</style>
