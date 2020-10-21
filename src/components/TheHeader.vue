<template>
  <header class="header">
    <v-container class="d-flex align-center">
      <v-img
        max-height="24"
        max-width="24"
        class="mr-4"
        :src="require('../assets/images/teamwork-logo.svg')"
      ></v-img>

      <v-spacer></v-spacer>

      <h1>TeamWork</h1>

      <v-spacer></v-spacer>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn icon to="/people">
        <v-icon>mdi-account-multiple</v-icon>
      </v-btn>
    </v-container>
  </header>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 70px;
  background-color: #fbfbfb;
  border-bottom: 1px solid #e3e3e3;
  padding: 0 15px;
}
</style>
