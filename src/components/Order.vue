<template>
  <div>
    <v-row>
      <v-col cols="12" sm="7" class="mx-auto">
        <v-card class="teal lighten-5" light>
          <v-card-title class="headline green--text text--darken-3">{{name}}</v-card-title>

          <v-card-subtitle class="title teal--text text--darken-4">Food place: {{foodPlace}}</v-card-subtitle>

          <v-card-actions>
            <v-btn
              @click="dialog=true"
              class="px-3 font-weight-light text-capitalize ml-auto"
              rounded
              dark
              color="green"
            >Make a request!</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" width="600px" max-width="100%">
        <RequestDialog
          @closeDialog="dialog=false"
          :oid="oid"
          :name="name"
          :comm="comm"
        />
      </v-dialog>
    </v-row>
    <Snackbar />
  </div>
</template>

<script>
import RequestDialog from "./RequestDialog";
import Snackbar from "./SnackBar";
export default {
  components: {
    RequestDialog,
    Snackbar
  },
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    oid: Number,
    foodPlace: String,
    name: String,
    comm: String
  }
};
</script>

<style>
</style>