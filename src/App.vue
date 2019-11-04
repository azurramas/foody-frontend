<template>
  <v-app>
    <Navigation />

    <v-content style="min-height: 100vh" class="teal lighten-5">
      <v-fade-transition mode="out-in">
        <router-view></router-view>
      </v-fade-transition>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

