<template>
  <v-card>
    <v-card-title>
      <span class="headline">Add Order</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="restaurant"
              color="green darken-1"
              hint="Place where you'll order food"
              label="Restaurant - Food place*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="comment"
              color="green darken-1"
              hint="eg. Please make a request by 11AM."
              label="My comment"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-alert v-model="error" dense outlined type="warning">Please fill in all required fields.</v-alert>
        <small>*indicates required field</small>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="teal darken-4" text @click="$emit('closeDialog')">Close</v-btn>
      <v-btn color="teal darken-4" dark @click="dialog = true">Add</v-btn>
    </v-card-actions>
    <v-dialog max-width="350" v-model="dialog">
      <v-card>
        <v-card-title class="headline">Confirm</v-card-title>
        <v-card-text>Are you sure you want to add this order?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="error darken-1" text @click="dialog = false">No</v-btn>
          <v-btn color="green darken-1" text @click="addOrder">Yes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      error: false,
      restaurant: "",
      comment: "",
      dialog: false
    };
  },
  methods: {
    addOrder() {
      if (/\S/.test(this.restaurant) && /\S/.test(this.comment)) {
        this.dialog = false;
        this.$emit("closeDialog");

        let payload = {
          restaurant: this.restaurant,
          comment: this.comment
        };

        this.$store.dispatch("addOrder", payload);
        this.restaurant = "";
        this.comment = "";
      } else {
        this.dialog = false;
        this.error = true;
      }
    }
  }
};
</script>

<style>
</style>