<template>
  <v-dialog v-model="dialog" persistent width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2">
        Planet Infos
      </v-card-title>

      <v-card-text class="py-3">
        <div>
          <p><strong>Name:</strong> {{ planet.name }}</p>
          <p>
            <strong>Diamater:</strong>
            {{ planet.diameter }}
          </p>
          <p>
            <strong>Climate:</strong>
            {{ planet.climate }}
          </p>
          <p>
            <strong>Population:</strong>
            {{ planet.population }}
          </p>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="closeDialog">
          Close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      dialog: state => state.dialog.isOpen,
      planet: state => state.planet.selectedPlanet
    })
  },
  methods: {
    closeDialog() {
      this.$store.commit("dialog/TOGGLE", false);
      this.$store.commit("planet/SET_PLANET", "");
    }
  }
};
</script>

<style lang="scss"></style>
