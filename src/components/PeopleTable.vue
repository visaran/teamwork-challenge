<template>
  <div>
    <v-card>
      <v-card-title>
        Search by name
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="allUsers"
        :items-per-page="5"
        class="elevation-1"
        :search="search"
        :loading="!allUsers.length"
        loading-text="Loading... Please wait"
      >
        <template v-slot:[`item.homeworld`]="{ item }">
          <a @click="openDialog(item.homeworld)">
            {{ item.homeworld }}
          </a>
        </template>
      </v-data-table>
    </v-card>

    <v-snackbar v-model="snackbar">
      There was an unexpected error, please try again later.

      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import api from "../api";

export default {
  data() {
    return {
      snackbar: false,
      search: "",
      planetNames: [],
      errorMsg: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name"
        },
        { text: "Height", value: "height" },
        { text: "Mass", value: "mass" },
        { text: "Created", value: "created" },
        { text: "Edited", value: "edited" },
        { text: "Planet Name", value: "homeworld" }
      ]
    };
  },
  computed: {
    ...mapState({
      allUsers: state => state.user.all
    })
  },
  methods: {
    fetchUsers() {
      this.$store.dispatch("user/getAll").catch(err => {
        this.snackbar = true;
      });
    },
    openDialog(url) {
      this.$store.commit("planet/SET_LOADING", true);

      api
        .getPlanetByUrl(url)
        .then(res => {
          this.$store.commit("planet/SET_PLANET", res.data);
        })
        .catch(() => {
          this.snackbar = true;
        })
        .finally(() => {
          this.$store.commit("planet/SET_LOADING", false);
        });
      this.$store.commit("dialog/TOGGLE", true);
    }
  },
  mounted() {
    this.fetchUsers();
  }
};
</script>

<style lang="scss"></style>
