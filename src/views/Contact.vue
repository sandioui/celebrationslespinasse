<template>
  <section class="background-wrapper-beige">
    <h1 id="contact_section1_title">Pour planifier une rencontre</h1>
    <div id="contact_section1" class="boxed"> 
      <div id="section1_calendly">
        <iframe src="https://calendly.com/celebrationslespinasse/60min" id="calendly_widget"></iframe>
      </div>
      <div id="section1_text">
        
        <div id="section1_text_email" class="section1_text_coordo">
          <h3 class="contact_type">Courriel : </h3>
          <a href="mailto:celebrationslespinasse@videotron.ca" class="coordo">celebrationslespinasse@videotron.ca</a>
        </div>

        <div id="section1_text_tel" class="section1_text_coordo">
          <h3 class="contact_type"> Téléphone : </h3>
          <a href="tel:514-473-2812" class="coordo">514-473-2812</a>
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
    margin-top: 7%;
    margin-bottom: 5%;
    text-align: center;
        
  }

  #contact_section1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 4%;

  }

  #section1_calendly {
    width: 45%;
    padding-left: 8%;
  }

  #calendly_widget {
    width: 100%;
    height: 60vh;
    border-radius: 6px !important;
    border: 0;
    overflow: none;
  }

  #section1_text {
    padding: 4% 4% 0 6%;
    width: 45%;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 19px;
  }

  .section1_text_coordo {
    display: flex;
    padding-bottom: 3%;
    align-items: flex-end;
  }

  .contact_type {
    padding-right: 1%;
    font-weight: 700;
  }

  .coordo {
    text-decoration: none;
    color: #444554;
  }

  #section1_text_tel {
    padding-bottom: 4%;
  }

  


</style>