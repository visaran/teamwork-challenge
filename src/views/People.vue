<template>
  <div>
    <v-container>
      <people-table />
    </v-container>
    <planet-dialog />
  </div>
</template>

<script>
import PeopleTable from "../components/PeopleTable";
import PlanetDialog from "../components/PlanetDialog";

export default {
  components: {
    PeopleTable,
    PlanetDialog
  }
};
</script>

<style lang="scss"></style>
