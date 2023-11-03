jQuery('document').ready(function(){

    jQuery('.rbt_laoder_wrapper').hide();
    jQuery('.body-layout').show();

    RBTTemplateImageViewerCall();

    $('.carousel-slider-Rbt').owlCarousel({
        items: 1,
        animateOut: '.carousel-slider-Rbt',
        loop: true,
        margin: 10,
        nav:true,
        dots: false,
        autoplay:true,
    });

    // For section 3
    $('.carousel-slider-inner').owlCarousel({
        /*items: 3,*/
        animateOut: '.carousel-slider-inner',
        loop: true,
        margin: 10,
        nav:true,

        responsive:{
            0:{
                items:1
            },
            
            1000:{ items:3
           },
        }
    });      

});

function RBTTemplateImageViewerCall(){
    if(jQuery('.rbt_main_container_image_viewer img').length != 0){
        jQuery('.rbt_main_container_image_viewer').each(function(){
                // call gallery view
                new Viewer(document.getElementById(jQuery(this).attr('id')));
        });
    }
}