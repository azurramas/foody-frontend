<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card class="elevation-6">
          <v-toolbar class="teal--text text--darken-4" flat>
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form @keyup.native.enter="login">
              <v-text-field
                color="green darken-1"
                v-model="username"
                label="Username"
                name="username"
                prepend-icon="mdi-account"
                type="text"
              />

              <v-text-field
                color="green darken-1"
                v-model="password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
            <v-alert v-if="err" dense outlined type="error">Username or password incorrect.</v-alert>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              v-on:click="login"
              rounded
              depressed
              text
              dark
              class="px-4 teal--text text--darken-4"
            >Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      err: false
    };
  },
  methods: {
    login: function() {
      let payload = {
        username: this.username,
        password: this.password
      };

      this.$store.dispatch("login", payload)
      .catch(err => {
        if (err) this.err = true;
      });
    }
  }
};
</script>

<style>
</style>