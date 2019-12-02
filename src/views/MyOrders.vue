<template>
  <div style="margin-top: 50px">
    <h1
      class="display-1 text-center teal--text text--darken-4 font-weight-regular"
      style="margin-bottom: 50px"
    >My Orders</h1>
    <v-container style="margin-bottom: 50px;">
      <v-row class="justify-center">
        <MyOrder
          :oid="order.id"
          :comm="order.comment"
          :foodPlace="order.restaurant"
          :key="order.id"
          v-for="order in orders"
        />
        <Snackbar />
      </v-row>
      <v-btn @click="addDialog=true" color="green" dark x-large fixed bottom right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-row justify="center">
        <v-dialog v-model="addDialog" width="500px" max-width="100%">
          <AddOrder @closeDialog="addDialog = false" />
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MyOrder from "../components/MyOrder";
import Snackbar from "../components/SnackBar";
import AddOrder from "../components/AddOrder";
export default {
  data() {
    return {
      addDialog: false
    };
  },
  components: {
    MyOrder,
    Snackbar,
    AddOrder
  },
  computed: {
    orders() {
      var orders = this.$store.state.myorders;
      return orders;
    }
  },
  mounted() {
    this.$store.dispatch("getMyOrders");
  }
};
</script>

<style>
</style>