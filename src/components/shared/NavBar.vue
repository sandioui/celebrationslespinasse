<template>
  <section class="nav-wrapper">
    <div id="navbar" class="boxed">
      <img alt="Vue logo" src="../../assets/logo.png">
      <div id="nav">
        <router-link to="/">Home     </router-link>
        <router-link to="/celebration"> Celebration</router-link>
        <router-link to="/about"> About</router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NavBar',
  props: { }
}
</script>

<style>
  #navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1% 4% 1% 4%;
    width: 100%;
  }

  #navbar #nav {
    padding: 0;
    padding-bottom: 5px;
  }

  .nav-wrapper {
    width: 100%;
    background-color: #F4F1F0;
    display:flex;
    justify-content: center;
  }
</style>