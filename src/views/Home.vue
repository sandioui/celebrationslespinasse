<template>
    <section class="background-wrapper-beige">
        <div id="section1" class="boxed">
            <div id="section1_text">
                <h1 id="section1_title">
                    Une ambiance de sérénité,<br>de joie, d’amour et de paix.
                </h1>
                <h1 id="section1_title_mobile">
                    Une ambiance de sérénité, de joie, d’amour et de paix.
                </h1>
                <div id="section1_paragraph">
                    Je vous accompagne pour <strong> cérémonies de mariage et évènements marquants 
                    de votre vie.</strong> Vous bénéficierez d’un service professionnel et personnalisé 
                    en respectant vos besoins et croyances.
                </div>
                <div id="section1_CTA">
                    <a id="section1_CTA_button">
                        Préparons un moment mémorable
                    </a>
                </div>
            </div> 
            
            <div id="section1_pictures">
                <img id="ceremony-img" src="../assets/photo_home.png">
            </div>
            <div id="section1_picture_mobile">
                <img id="ceremony-img" src="../assets/ceremonie.png">
            </div>
        </div>
    </section>
    <div id="section2" class="boxed">
        <h2 id="section2_title">
            Mes services
        </h2>
        <div class="row">
            <img class="section2_row_img" src="../assets/hands_services.png">
            <div class="row_text-container-right">
                <h4 class="title">
                    Célébration de mariage
                </h4>
                <div class="text">
                    En tant que célébrant, je vous accompagnerai dans cette aventure 
                    importante de votre vie pour en faire une journée mémorable et 
                    inoubliable.
                </div>
                <div>
                    <img src="../assets/right_arrow.png">
                    <a href="/celebration" class="section2_CTA">
                        En savoir plus
                    </a>
                </div>
            </div>

        </div>
        <div class="row">
            
            <div class="row_text-container-left">
                <h4 class="title">
                    Gestion d’événements
                </h4>
                <div class="text">
                    Peu importe le type d’événement, que ce soit un party de bureau, 
                    un événement familial ou une fête privée, n’hésitez pas à communiquer 
                    avec moi.
                </div>
                <div>
                    <img src="../assets/right_arrow.png">
                    <a href="/evenement" class="section2_CTA">
                        En savoir plus
                    </a>
                </div>
            </div>
            <img class="section2_row_img" src="../assets/event_services.png">

        </div>
        <div id="last_row" class="row">
            <img class="section2_row_img" src="../assets/couple_services.png">
            <div class="row_text-container-right">
                <h4 class="title">
                    Clé en main
                </h4>
                <div class="text">
                    L’organisation d’un événement peut être stressant, il y a beaucoup 
                    de choses à penser! Nous travaillerons de concert afin que cette 
                    journée reste gravée pour de longues années.
                </div>
                <div>
                    <img src="../assets/right_arrow.png">
                    <a href="cle-en-main" class="section2_CTA">
                        En savoir plus
                    </a>
                </div>
            </div>

        </div>
    </div>
    
    <section class="background-wrapper-beige">
        <div id="section3">
            <div id="section3_text">
                <h1 id="section3_title">
                    Qui suis-je ?
                </h1>
                <div class="section3_paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor pretium viverra. Vel elit scelerisque mauris pellentesque. Malesuada nunc vel risus commodo. Quisque id diam vel quam elementum pulvinar etiam. Quam quisque id diam vel quam elementum pulvinar etiam. Amet justo donec enim diam vulputate ut. Pulvinar mattis nunc sed blandit libero volutpat. Mi bibendum neque egestas congue. 
                </div>
                <div class="section3_paragraph">
                    Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Lectus proin nibh nisl condimentum id. In egestas erat imperdiet sed. Lorem ipsum dolor sit amet. Sagittis vitae et leo duis. Volutpat est velit egestas dui id ornare. 
                </div>
                <div class="section3_paragraph">
                    Sed adipiscing diam donec adipiscing tristique risus nec. Molestie ac feugiat sed lectus vestibulum mattis. Volutpat odio facilisis mauris sit amet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. 
                </div>
            </div> 
            
            <div id="section3_img">
                <img id="steeve-branding" src="../assets/steeve_branding.png" >
            </div>
        </div>
    </section>
    <Carousel />
</template>

<script>
import Carousel from "../components/Carousel.vue"
export default {
    components: {
        Carousel
    }
}
</script>

<style>
    #section1 {
        padding: 8% 4% 8% 4%;
        color: #444554;
    }

    #section1_title_mobile {
        display: none;
    }
    
    #section1 #section1_text {
        padding: 0 0 0 4%;
    }

    #section1 #section1_title {
        font-family: 'Prata', serif;
        font-weight: 400;
    }

    #section1 #section1_paragraph {
        font-family: 'Lato', sans-serif;
        line-height: 1.7;
    }

    #section1 #section1_CTA {
        font-family: 'Lato', sans-serif;
        background-color: #976A5E ;
        color: #ffff;
        border-radius: 20px;
        letter-spacing: 0.5px;
    }

    #section1 #section1_pictures {
        padding: 0 4%;
    }

    #ceremony-img {
        padding: 0 0;
        float:right;
        clear:right;
    }

    #section2 {
        color: #444554;
    }
    
    #section2 #section2_title {
        text-align: center;
        font-family: 'Prata', serif;
        font-weight: 400;
    }

    #section2 .row {
        font-family: 'Lato', sans-serif;
    }

    #section2 .row .title {
        font-weight: bold;
    }

    #section2 .row .text {
        line-height: 1.7;
        font-weight: regular;
    }

    .section2_CTA {
        color: #7D7D7D;
        text-decoration: none;
    }

    #section3 {
        color: #444554;
        width: 100%;
        padding: 8% 4% 1% 4%;
        align-items: center;
    }
    
    #section3 #section3_text {
        padding: 0 0 0 11.5%;
    }

    #section3 #section3_title {
        font-family: 'Prata', serif;
        font-weight: 400;
    }

    #section3 .section3_paragraph {
        font-family: 'Lato', sans-serif;
        text-align: justify;
        line-height: 1.7;
    }

    #section3_img {
        padding-right: 4%;
    }


    /*Extra large devices (large desktops, 1200px and up)*/
    @media (min-width: 1200px) {
        #section1 #section1_paragraph {
            font-size: 19px;
            margin-bottom: 70px;
            max-width: 100%;
        }

        #section1 #section1_CTA {
            font-size: 22px;
            padding: 23px 30px;
        }

        #section1 #section1_pictures {
            width: 100%;
        }
        
        #section1 #section1_title {
            font-size: 46px;
            margin-top: 28px;
            margin-bottom: 20px;
        }
        
        #section1 #section1_text {
            position: absolute;
            max-width: 50%;
        }

        #section1 {
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
        
        #ceremony-img {
            width: 55vh;
        }

        #section2 #section2_title {
            padding: 2%;
            margin-top: 30px;
            margin-bottom: 30px;
            font-size: 46px;
        }
        
        #section2 .row {
            display: flex;
            padding: 0 162px 0 162px;
            vertical-align: top;
            margin-bottom: 139px;
            font-size: 19px;
        }

        #section2 #last_row {
            margin-bottom: 139px;
        }

        #section2 .row_text-container-right {
            padding: 0 0 0 89px;
        }
        
        #section2 .row_text-container-left {
            padding: 0 89px 0 0;
        }

        #section2 .row .title {
            margin-bottom: 27px;
        }

        .section2_CTA {
            padding: 0 0 0 15px;
        }

        #section2 .row .text {
            margin-bottom: 27px;
        }

        #section3 {
            display: flex;
            justify-content: space-between;
        }

        #section3 #section3_title {
            font-size: 46px;
            margin-bottom: 48px;
        }
        
        #section3 .section3_paragraph {
            max-width: 82%;
            margin-bottom: 28px;
            font-size: 19px;
        }
    }

    @media (min-width: 375px) {
        #section1_text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #section1 #section1_title {
            display: none;
        }

        #section1{
            padding: 5 0;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        #section1_text {
            padding: 0;
        }
        
        #section1_paragraph {
            text-align: center;
            padding-bottom: 28px;
        }

        #section1 #section1_title_mobile {
            font-size: 30px;
            margin-bottom: 28px;
            display: inherit;
            text-align: center;
        }

        #section1_pictures {
            display: none;
        }

        #section1_picture_mobile img{
            padding-top: 28px;
            width: 300px;
        }

        #section1_CTA {
            padding: 15px;
        }

        #section2 {
            margin-top: 28px;
            margin-bottom: 18px;
        }

        #section2 img {
            display: none;
        }

        #section2 #section2_title, #section3_title {
            font-weight: 600 !important;
            font-size: 30px;
            text-align: center;
        }

        #section2 .row {
            padding: 20px
        }

        #section2 .row .text {
            padding-top: 10px;
            padding-bottom: 10px;
            line-height: 1;
        }

        #section3 {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        #section3 #section3_text {
            padding: 0px 30px;
        }

        #section3_title {
            padding-bottom: 28px;
        }

        #section3_img {
            padding: 28px 0px;
        }

        #section3_img img {
            width: 250px;
        }


    }
</style>