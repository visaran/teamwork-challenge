<template>
  <div>
    <v-card>
      <v-card-title>
        List of people
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search by name"
          single-line
          hide-details
          @keyup="searchByName"
          :disabled="isLoading"
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="allUsers"
        :items-per-page="10"
        class="elevation-1"
        disable-filtering
        :loading="isLoading"
        hide-default-footer
        loading-text="Loading... Please wait"
      >
        <template v-slot:[`item.homeworld`]="{ item }">
          <a @click="openDialog(item.planet)">
            {{ item.planet.name }}
          </a>
        </template>
      </v-data-table>
      <div class="text-center pt-2">
        <v-pagination
          v-model="page"
          @input="changePage(page)"
          :length="pages"
        ></v-pagination>
      </div>
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
      page: 1,
      search: "",
      isLoading: false,
      searchDebounceTimer: null,
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
      allUsers: state => state.user.all,
      pages: state => Math.ceil(state.user.count / 10)
    })
  },
  methods: {
    fetchUsers(page, search) {
      this.isLoading = true;

      this.$store
        .dispatch("user/getAll", { page, search })
        .catch(err => {
          this.snackbar = true;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    changePage(page) {
      this.fetchUsers(page, this.search);
    },
    searchByName() {
      clearTimeout(this.searchDebounceTimer);
      this.searchDebounceTimer = setTimeout(() => {
        this.page = 1;
        this.fetchUsers(this.page, this.search);
      }, 1000);
    },
    openDialog(planet) {
      this.$store.commit("planet/SET_PLANET", planet);
      this.$store.commit("dialog/TOGGLE", true);
    }
  },
  mounted() {
    this.fetchUsers(this.page, this.search);
  }
};
</script>

<style lang="scss"></style>
