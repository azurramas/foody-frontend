<template>
  <div style="margin-top: 50px">
    <h1
      class="display-1 text-center teal--text text--darken-4 font-weight-regular"
      style="margin-bottom: 50px"
    >My Orders</h1>
    <v-container
      style="margin-bottom: 50px; max-width: 1000px; background-color: white; border-radius: 4px;"
      class="elevation-6"
    >
      <MyOrder
        v-for="order in orders"
        :key="order.id"
        :foodPlace="order.restaurant"
        :oid="order.id"
        :comm="order.comment"
      />
      <v-btn color="green" dark x-large fixed bottom right fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import MyOrder from "../components/MyOrder";
export default {
  components: {
    MyOrder
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