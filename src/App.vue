<template>
  <div id="nav">
    <div>
      <h1>CoderQuiz</h1>
    </div>
    <div>
      <router-link :to="{name: 'Play'}">Play</router-link>
      <router-link :to="{name: 'About'}">About</router-link>
      <!-- <router-link to="/login">Login</router-link> -->
    </div>
  </div>
  <router-view />
</template>

<style lang="scss">
@import "variables";

:root{
  font-size: 0.9rem;
  @include for-desktop{
    font-size: 1rem;
  }
}

html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: $font-main;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $black;
}

#nav {
  padding: 1rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  background-color: $green;

  h1 {
    margin: 0;
    color: $white;
  }

  a {
    font-weight: bold;
    color: $white;
    text-decoration: none;
    padding: 0.25rem 0.75rem;

    &.router-link-exact-active {
      color: $green;
      background-color: $white;
    }
  }
}
</style>
