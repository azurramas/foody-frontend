<template>
  <div>
    <v-simple-table
      height="150"
      class="table white lighten-5"
      light
    >
      <template v-slot:default>
        <thead v-if="requests.length != 0">
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Food</th>
          </tr>
        </thead>
        <tbody v-if="requests.length == 0 ">
            <tr><td> No requests found for this order.</td></tr>
        </tbody>
        <tbody v-if="requests.length != 0">
          <tr v-for="request in requests" :key="request.id">
            <td>{{ request.user_name }}</td>
            <td>{{ request.request_content }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    oid: Number
  },
  created() {
    this.$store.state.requests = [];
  },
  computed: {
    requests() {
      var oid = this.oid;
      var requests = [];
      this.$store.state.requests.forEach(function(request) {
        if (request[0] == oid) {
          if (request[1] !== null) {
            requests = requests.concat(request[1]);
          }
        }
      });
      return requests;
    }
  },
  mounted() {
    this.$store.dispatch("getRequests", this.oid);
  }
};
</script>

<style scoped>
tbody tr {
  transition: all 0.3s ease-in-out;
}

</style>