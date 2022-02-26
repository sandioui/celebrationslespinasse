<template>
  <NavBar />
  <router-view/>
  <Footer />
</template>
<script>
import NavBar from "./components/shared/NavBar.vue"
import Footer from "./components/shared/Footer.vue"
export default {
  components: {
    NavBar,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #444554;
  flex-direction: column;
  overflow-x: hidden;
}


#nav a {
  font-weight: bold;
  color: #444554;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: -0.1px;
}

#nav a.router-link-exact-active {
  color: #444554;
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
