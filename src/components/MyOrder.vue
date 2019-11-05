<template>
  <div>
    <v-row>
      <v-col cols="12" sm="7" class="mx-auto">
        <v-card class="teal lighten-5" light>
          <v-container>
            <v-row>
              <v-card-subtitle class="col-6 title teal--text text--darken-4">Order ID: {{oid}}</v-card-subtitle>
              <v-card-actions class="col-6">
                <v-btn small @click="dialog=true" class="ml-auto" rounded fab dark color="error">
                  <v-icon dark>mdi-delete</v-icon>
                </v-btn>
              </v-card-actions>
            </v-row>
          </v-container>
          <v-card-subtitle class="title teal--text text--darken-4">Food place: {{foodPlace}}</v-card-subtitle>
          <v-card-subtitle class="title teal--text text--darken-4">
            My comment:
            <p class="body-1 black--text">{{comm}}</p>
          </v-card-subtitle>
          <v-card-subtitle class="title teal--text text--darken-4">Requests:</v-card-subtitle>

          <RequestsTable :oid="oid" />
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" width="600px" max-width="100%">
        <RequestDialog
          @closeDialog="dialog=false"
          @openSnack="openSnackbar()"
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
import RequestsTable from "./RequestsTable";
export default {
  components: {
    RequestsTable
  },
  props: {
    oid: Number,
    foodPlace: String,

    comm: String
  }
};
</script>

<style>
</style>