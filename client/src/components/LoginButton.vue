<template>
  <div class="dropdown-container" v-if="$cookies.isKey('jwt')">
    <a @click="toggleDropdown">User</a>
    <div class="dropdown" v-if="isOpen">
      <a href="/auth/logout">Logout</a>
    </div>
  </div>

  <div class="dropdown-container" v-else>
    <button @click="()=>toggleDropdown()">Login</button>
    <div class="dropdown" v-if="isOpen">
      <a href="/auth/login">LOGIN WITH GITHUB</a>
    </div>
  </div>

</template>
<script>
export default {
  name: "LoginButton",
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleDropdown(isOpen = null){
      if(isOpen != null){
      this.isOpen = isOpen;
      }else{
        this.isOpen = !this.isOpen;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../variables";

a, button {
  all: unset;
  font-weight: bold;
  color: $white;
  border: 1px solid $white;
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  cursor: pointer;

  &:focus {
    color: $green;
    background-color: $white;
  }
}

.dropdown-container{
    display: inline-block;
    position: relative;
    margin: 0;
    padding: 0;

  & .dropdown {
    display: inline-block;
    position: absolute;
    right: 0;
    top: 2rem;
    padding: 1rem;
    background-color: $green;
    border: 1px solid $green-d;
    border-radius: 5px;
    transition: all 150ms ease-in-out;
  }
}


</style>
