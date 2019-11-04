<template>
  <v-container style="max-width: 1200px" class="fill-height">
    <v-row class="d-md-inline-flex justify-center align-center">
      <v-col class="text-center text-md-left" cols="12" md="4">
        <h1 class="display-3 teal--text text--darken-4 font-weight-bold">Welcome to Foody!</h1>
        <p
          class="mt-4 title font-weight-regular"
        >Join others when they're ordering food, or login and let others join you!</p>
        <v-btn large
          @click="$router.push('/orders')"
          color="teal darken-4"
          dark
          rounded
          class="text-capitalize"
        >See available orders</v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <img style="max-width: 100%; margin-top: -50px; " src="@/assets/home.png" alt />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
<style scoped>
</style>
