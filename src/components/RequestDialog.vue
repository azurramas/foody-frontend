<template>
  <v-card>
    <v-container>
      <v-card-title>
        <span class="headline teal--text text--darken-4">Make a request!</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <h3>{{name}}'s comment/message:</h3>
            <p>{{comm}}</p>
          </v-col>

          <v-col cols="12">
            <v-text-field
              color="green darken-1"
              v-model="userName"
              hint="So the orderer knows who you are"
              label="Name*"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              color="green darken-1"
              v-model="requestContent"
              hint="e.g. Hamburger x1"
              label="Food you'd like to eat*"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-alert v-model="error" dense outlined type="warning">Please fill in all required fields.</v-alert>
        <small>*indicates required field</small>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="teal darken-4" text @click="closeDialog">Close</v-btn>
        <v-btn color="teal darken-4" text @click="sendRequest">Send</v-btn>
      </v-card-actions>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      requestContent: "",
      error: false
    };
  },
  props: {
    oid: Number,
    name: String,
    comm: String
  },
  methods: {
    closeDialog() {
      this.$emit("closeDialog");
    },
    sendRequest() {
      if (/\S/.test(this.userName) || /\S/.test(this.requestContent)) {
        this.$emit("closeDialog");

        let payload = {
          order_id: this.oid,
          request_content: this.requestContent,
          user_name: this.userName
        };
        this.$emit("openSnack");

        this.$store.dispatch("sendRequest", payload);
        this.requestContent = "";
        this.userName = "";
      } else {
        this.error = true;
      }
    }
  }
};
</script>

<style>
</style>