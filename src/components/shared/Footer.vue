<template>
  <section id="footer">
    <div id="top-section">
        <div>
            <h3>Au coeur de vos événements</h3>
            <div id="footer-text">Mon professionnalisme me permettra de vous offrir un service personnalisé à votre image et ceux de 
                votre conjoint dans le respect et l’écoute de vos besoins.
            </div>
            <img alt="blue logo" src="../../assets/logo_bleu.png">
        </div>
        <ul id="footer-nav">
            <li><a href="/">Accueil</a></li>
            <li id="footer-nav-last-element"><a href="/contact">Contact</a></li>
        </ul>
    </div>
    <hr>
    <div id="bottom-section">
        <div> <strong>© 2021. LES GESTIONS SANO</strong> | Tous droits réservés.</div>
        <div id="follow-me-section">
            Suivez-moi :
            <div id="icon-section">
                <img alt="facebook" src="../../assets/facebook.png">
                <img alt="instagram" src="../../assets/instagram.png">
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  props: { },
}
</script>

<style>
    #footer {
        background-color: #F4F1F0;
        padding: 1% 4% 1% 4%;
        font-family: 'Lato';
    }

    #top-section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: baseline;
        padding: 2% 0 0;
    }

    #footer h3 {
        font-family: 'Prata', serif;
        font-weight: 400;
    }

    #footer-text {
        width: 70%;
        padding: 2% 0;
        font-family: 'Lato';
        line-height: 1.5;
    }

    #footer-nav {
        display: flex;
        list-style: none;
    }

    #footer hr {
        margin: 25px 0;
        opacity: 0.4;
        background-color: #444554;
    }

    #footer-nav li a{
        padding-right: 15px;
        color: #444554;
        text-decoration: none;
        font-weight: bold;
    }

    #footer-nav #footer-nav-last-element {
        padding-right: 0px;
    }

    #bottom-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #follow-me-section {
        display: flex;
        align-items: center;
    }

    #icon-section {
        padding-left: 5px;
    }


</style>