<template>
  <v-col cols="12" sm="4">
    <v-card min-height="100%">
      <v-card-title class="teal--text text--darken-4">
        Order ID: {{oid}}
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn
            @click="deleteDialog=true"
            max-width="50"
            max-height="50"
            rounded
            fab
            dark
            color="error"
          >
            <v-icon dark>mdi-delete</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card-title>
      <v-divider class="mx-4"></v-divider>

      <v-card-text class="pb-0">
        <div class="mb-4 subtitle-1 black--text">Food place: {{foodPlace}}</div>
        <div class="subtitle-1 black--text">Requests:</div>
      </v-card-text>
      <RequestsTable :oid="oid" />

      <v-card-text>
        <div class="subtitle-1 black--text">My comment:</div>
        <div>{{comm}}</div>
      </v-card-text>
    </v-card>
    <v-row justify="center">
      <v-dialog v-model="deleteDialog" width="500px" max-width="100%">
        <DeleteDialog :oid="oid" @closeDialog="deleteDialog=false" />
      </v-dialog>
    </v-row>
  </v-col>
</template>

<script>
import RequestsTable from "./RequestsTable";
import DeleteDialog from "./DeleteDialog";
export default {
  data() {
    return {
      deleteDialog: false
    };
  },
  components: {
    RequestsTable,
    DeleteDialog
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