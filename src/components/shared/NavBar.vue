<template>
  <section class="nav-wrapper">
    <div id="navbar" class="boxed">
      <router-link to="/"><img alt="Vue logo" src="../../assets/logo.png"></router-link> 
      <div id="nav">
        <router-link to="/celebration"> Celebration</router-link>
        <router-link to="/evenement"> Gestion d'événements</router-link>
        <router-link to="/cle-en-main"> Clé en main</router-link>
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