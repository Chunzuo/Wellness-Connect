<template>
  <div>
    <main-header></main-header>
    <router-view />
    <main-footer></main-footer>
  </div>
</template>

<script>
// import firebase from "firebase";
import MainHeader from "@/components/Header.vue";
import MainFooter from "@/components/Footer.vue";
export default {
  components: {
    MainHeader,
    MainFooter
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem("user"));
    this.$store.commit("updateUserData", user);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
