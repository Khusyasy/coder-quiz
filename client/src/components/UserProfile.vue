<template>
  <div class="profile">
    <div class="img-container">
      <img
        :src="$cookies.get('avatar_url')"
        :alt="$cookies.get('username') + 'Profile Image'"
      />
    </div>
    <p>{{ $cookies.get("username") }}</p>
  </div>
</template>
<script>
export default {
  name: "UserProfile",
};
</script>

<style lang="scss" scoped>
@import "../variables";

.profile {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin-bottom: 1rem;
}

.img-container {
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  object-fit: fill;
  margin: 0.25rem;
}

img {
  height: 100%;
  width: 100%;
}

p {
  display: block;
  color: $white;
  padding: 0;
  margin: 0;
}
</style>