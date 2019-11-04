<template>
  <v-snackbar :color="snackbar.color" v-model="snackbar.status" :timeout="3500">
    {{snackbar.message}}
    <v-btn text @click="snackbar.status = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackbar() {
      return this.$store.state.snackbar;
    }
  }
};
</script>

<style>
</style>