<template>
  <div style="margin-top: 50px">
    <h1
      class="display-1 text-center teal--text text--darken-4 font-weight-regular"
      style="margin-bottom: 50px"
    >Currently ordering</h1>
    <v-container
      style="margin-bottom: 50px; max-width: 1000px; background-color: white; border-radius: 4px;"
      class="elevation-6"
    >
      <Order
        v-for="order in orders"
        :key="order.id"
        :oid="order.id"
        :foodPlace="order.restaurant"
        :name="order.user_name"
        :comm="order.comment"
      />
      
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Order from "@/components/Order.vue";
export default {
  data() {
    return {
     
    };
  },
  components: {
    Order
  },
  computed: {
    ...mapGetters(["getterOrders"]),
    orders() {
      let orders = this.getterOrders;
      return orders.reverse();
    }
  },
  mounted() {
    this.$store.dispatch("getOrders");
  }
};
</script>

<style>
</style>