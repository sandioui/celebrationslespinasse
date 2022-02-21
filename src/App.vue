<template>
  <NavBar />
  <router-view/>
</template>
<script>
import NavBar from "./components/shared/NavBar.vue"
export default {
  components: {
    NavBar
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  flex-direction: column;
  overflow-x: hidden;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.background-wrapper-beige {
  background-color: #F4F1F0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.boxed {
  max-width: 1440px;
}

h1,h2,h3,h4,h5 {
  margin: 0;
}

body {
  margin: 0;
}
</style>
