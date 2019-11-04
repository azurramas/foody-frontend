<template>
  <nav>
    <v-navigation-drawer class="d-xs-flex d-lg-none" v-model="drawer" app>
      <v-list dense>
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!this.$store.getters.checkCookie" @click="$router.push('/register')">
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!this.$store.getters.checkCookie" @click="$router.push('/login')">
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-if="this.$store.getters.checkCookie" @click="clearCookie">
          <v-list-item-action>
            <v-icon></v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar class="green darken-3" dark app>
      <v-app-bar-nav-icon class="d-xs-flex d-lg-none" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">Foody</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        class="font-weight-light d-none d-lg-flex mr-10"
        v-for="link in links"
        :key="link.text"
        router
        :to="link.route"
      >{{link.text}}</v-btn>

      <div v-if="this.$store.getters.checkCookie">
        <v-btn
          text
          class="font-weight-light d-none d-lg-flex mr-10"
          v-for="userLink in userLinks"
          :key="userLink.text"
          router
          :to="userLink.route"
        >{{userLink.text}}</v-btn>
      </div>

      <v-btn
        v-if="this.$store.getters.checkCookie"
        @click="clearCookie"
        rounded
        depressed
        color="green"
        class="d-none d-lg-flex mr-10"
      >Logout</v-btn>

      <v-btn
        v-if="!this.$store.getters.checkCookie"
        text
        class="font-weight-light d-none d-lg-flex mr-10"
        @click="$router.push('/register')"
      >Register</v-btn>

      <v-btn
        v-if="!this.$store.getters.checkCookie"
        @click="$router.push('/login')"
        rounded
        depressed
        color="green"
        class="d-none d-lg-flex mr-10"
      >Login</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    cookie: false,
    drawer: false,
    links: [
      {
        text: "Home",
        icon: "mdi-home",
        route: "/"
      },
      {
        text: "Orders",
        icon: "mdi-home",
        route: "/orders"
      }
    ],
    userLinks: [
      {
        text: "My Orders",
        route: "/my-orders",
        icon: "mdi-home"
      }
    ]
  }),
  methods: {
    clearCookie() {
      this.$store.dispatch("clearCookie");
    }
  }
};
</script>

<style>
</style>