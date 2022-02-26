<template>
  <section class="nav-wrapper">
    <div id="navbar" class="boxed">
      <router-link to="/"><img alt="Vue logo" src="../../assets/logo.png"></router-link> 
      <div id="nav">
        <router-link to="/celebration" class="nav_link">Célébration de mariage</router-link>
        <router-link to="/evenement" class="nav_link">Gestion d'événement</router-link>
        <router-link to="/cle-en-main" class="nav_link">Clé en main</router-link>
        <router-link to="/contact" id="nav_button">Contactez-moi</router-link>
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
    padding: 1.3% 9% 1% 4%;
    width: 100%;
  }

  #navbar #nav {
    padding: 0;
    padding-bottom: 5px;
    white-space: nowrap;
  }

  .nav-wrapper {
    width: 100%;
    background-color: #F4F1F0;
    display:flex;
    justify-content: center;
  }

  .nav_link {
    padding-right: 4%;
  }

  #nav #nav_button {
    background-color: #976A5E;
    font-weight: 500;
    color: #ffff;
    padding: 12px 25px;
    border-radius: 6px;
    font-weight: 400;
    letter-spacing: 0.5px;

  }
  
</style>