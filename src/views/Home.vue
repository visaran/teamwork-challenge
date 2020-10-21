<template>
  <v-container class="px-4 text-center">
    <v-card class="home__card px-8 py-8">
      <h1>Welcome to Teamwork Front-end challenge</h1>
      <p>
        You can navigate through pages from the top bar
      </p>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.home {
  &__card {
    @media (min-width: 992px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
