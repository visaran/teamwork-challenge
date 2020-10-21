<template>
  <v-app id="app">
    <the-header />

    <div class="main-content">
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  data() {
    return {
      value: "home"
    };
  },
  components: {
    TheHeader
  }
};
</script>

<style lang="scss">
.main-content {
  padding: 40px 0;
}
</style>
