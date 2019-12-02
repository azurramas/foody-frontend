<template>
  <v-card>
    <v-card-title class="headline">Confirm</v-card-title>
<v-card-text>Are you sure you want to delete Order {{oid}}?</v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>

      <v-btn color="error darken-1" text @click="$emit('closeDialog')">No</v-btn>
      <v-btn color="green darken-1" text @click="deleteOrder">Yes</v-btn>

    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props:{
        oid: Number
    },
    methods:{
        deleteOrder(){
            this.$emit('closeDialog');
            this.$store.dispatch('deleteOrder', this.oid)
        }
    }
};
</script>

<style>
</style>