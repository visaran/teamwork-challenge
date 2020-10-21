<template>
  <v-app id="app">
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense>
        <v-toolbar-title>Teamwork Front-end Challenge</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon to="/people">
          <v-icon>mdi-account-multiple</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss"></style>
