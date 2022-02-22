<template>
    <section class="background-wrapper-beige">
        <div id="section1" class="boxed">
            <div id="section1_text">
                <h1 id="section1_title">
                    Une ambiance de sérénité,<br>de joie, d’amour et de paix.
                </h1>
                <div id="section1_paragraph">
                    Je vous accompagne pour <strong> cérémonies de mariage et évènements marquants 
                    de votre vie.</strong> Vous bénéficierez d’un service professionnel et personnalisé 
                    en respectant vos besoins et croyances.
                </div>
                <div>
                    <a id="section1_CTA">
                        Préparons un moment mémorable
                    </a>
                </div>
            </div> 
            
            <div id="section1_pictures">
                <img id="ceremony-img" src="../assets/ceremonie.png" >
                <img id="hands" src="../assets/hands.png">

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
                    <a class="section2_CTA">
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
                    <a class="section2_CTA">
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
                    <a class="section2_CTA">
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
                <div id="section3_paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl pretium fusce id velit ut tortor pretium viverra. Vel elit scelerisque mauris pellentesque. Malesuada nunc vel risus commodo. Quisque id diam vel quam elementum pulvinar etiam. Quam quisque id diam vel quam elementum pulvinar etiam. Amet justo donec enim diam vulputate ut. Pulvinar mattis nunc sed blandit libero volutpat. Mi bibendum neque egestas congue. 
                    <br> Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Lectus proin nibh nisl condimentum id. In egestas erat imperdiet sed. Lorem ipsum dolor sit amet. Sagittis vitae et leo duis. Volutpat est velit egestas dui id ornare. 
                    <br>Sed adipiscing diam donec adipiscing tristique risus nec. Molestie ac feugiat sed lectus vestibulum mattis. Volutpat odio facilisis mauris sit amet. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum. 
                </div>
            </div> 
            
            <div id="section3_pictures">
                <img id="steeve-branding" src="../assets/steeve_branding.png" >

            </div>
        </div>
    </section>

</template>

<script>
export default {

}
</script>

<style>
    
    #section1 {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 8% 4% 1% 4%;
        height: 67vh;
        color: #444554;
    }
    
    #section1 #section1_text {
        padding: 0 0 0 4%;
    
    }

    #section1 #section1_title {
        font-family: 'Prata', serif;
        font-size: 46px;
        font-weight: 400;
        margin-top: 28px;
    }

    #section1 #section1_paragraph {
        font-family: 'Lato', sans-serif;
        font-size: 19px;
        line-height: 1.7;
        margin-bottom: 85px;
    }

    #section1 #section1_CTA {
        font-family: 'Lato', sans-serif;
        font-size: 22px;
        background-color: #976A5E ;
        padding: 23px 30px;
        color: #ffff ;
        border-radius: 20px;
        letter-spacing: 0.5px;
    }

    #section1 #section1_pictures {
        width: 100%;
        padding: 0 4%;
    }

    #ceremony-img {
        padding: 0 0;
        width: 43vh;
        float:right;
        clear:right;
    }


   #hands {
        position: absolute;
        right: 352px;
        bottom: 100px;
        z-index: 1;
        top: 676px;
        width: 35vh;
    }

    #section2 {
        color: #444554;
    }
    
    #section2 #section2_title {
        text-align: center;
        font-family: 'Prata', serif;
        font-size: 46px;
        font-weight: 400;
        padding: 2%;
        margin-top: 30px;
        margin-bottom: 30px;
    }

    .row {
        display: flex;
        padding: 0 162px 0 162px;
        vertical-align: top;
        margin-bottom: 139px;
        font-family: 'Lato', sans-serif;
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

    .row .title {
        margin-bottom: 27px;
        font-weight: bold;
        
    }

    .row .text {
        margin-bottom: 27px;
        line-height: 1.7;
        font-weight: regular;
    }

    .section2_CTA {
        color: #7D7D7D;
        padding: 0 0 0 15px;
    }


</style>©