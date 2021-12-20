<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
    beforeCreate() {
    window.localStorage.isMySessionActive = "false";
    const token = localStorage.getItem("Authorization");
    if (token) {
      this.$store.dispatch("Authorization/get_user", false);
      setTimeout(() => {
        var status = this.isLoggedIn;
        if (status == "error") {
          //token is expired
          this.$store.dispatch("Authorization/logout");
          this.$router.replace("/login");
        }
      }, 500);
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);

    window.localStorage.isMySessionActive = "true";
  },
  data: function() {
    return {
      loading: true,
      componentKey: 0
    };
  }
};
</script>
