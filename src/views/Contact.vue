<template>
  <section class="background-wrapper-beige">
    <h1 id="contact_section1_title">Contact</h1>
    <div id="contact_section1" class="boxed"> 
      <div>
        <form action="mailto:sandrine.stonge@gmail.com">
          <input type="text" id="prenom">
          <label for="prenom">Prénom</label><br>
          <input type="text" id="nom">
          <label for="nom">Nom</label><br>
          <input type="text" id="courriel">
          <label for="courriel">Courriel</label><br>
          <input type="radio" id="mariage" name="event_type" value="mariage">
          <label for="mariage">Célébration de mariage</label><br>
          <input type="radio" id="evenement" name="event_type" value="evenement">
          <label for="evenement">Gestion d'événement</label><br>
          <input type="radio" id="cle_en_main" name="event_type" value="cle_en_main">
          <label for="cle_en_main">Clé en main</label>
          <input type="text" id="message">
          <label for="message">Message</label><br><br>
          <input type="submit" value="Envoyer">
        </form>
      </div>
    
      <div id="section1_text">
        <div id="section1_text_email">
          <a href="mailto:celebrationslespinasse@videotron.ca">celebrationslespinasse@videotron.ca</a>
        </div>

        <div id="section1_text_tel">
          <a href="tel:514-473-2812">514-473-2812</a>
        </div>

        <div>
          <img src="../assets/right_arrow.png">
          <a class="section2_CTA">
              Planifiez une rencontre
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {

}
</script>



<style>

  #contact_section1_title {
    font-family: 'Prata', serif;
    font-size: 46px;
    font-weight: 400;
    margin-top: 28px;
    margin-bottom: 20px;
    text-align: center;
        
  }

  #contact_section1 {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }


</style>