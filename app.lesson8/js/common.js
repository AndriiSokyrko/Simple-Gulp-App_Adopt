
$(document).ready(function(){

            function blueasyTabs() {
                var $wrapper = $('.tab-wrapper'),
                    $menu = $wrapper.find('.tab-menu li'),
                    $content = $wrapper.find('.thumbs-row');

                $content.not(':first-of-type').hide();
                $content.each(function(i) {
                    $(this).attr('data-tab', 'tab-'+i);
                });
                $menu.each(function(i) {
                    $(this).attr('data-tab', 'tab-'+i);
                });

                $menu.click(function() {
                    var $getWrapper = $(this).closest($wrapper),
                        dataTab = $(this).attr('data-tab');

                    $getWrapper.find($menu).find('a').removeClass('active');
                    $(this).find('a').addClass('active');

                    $getWrapper.find($content).hide();
                    $getWrapper.find($content).filter('[data-tab='+dataTab+']').show();
                });



            }
            //blueasyTabs();
            //end blueasyTabs

            function blueasyMenu() {
                var $trigger = $('.trigger-nav'),
                    $menu = $('.trigger-victim');

                $trigger.click(function() {
                    $menu.slideToggle();
                });

                $(window).resize(function() {
                    if ( $(window).width() > 768 ) {
                        $menu.removeAttr('style');
                    }
                });
            }
            blueasyMenu();
    /* ==================================== */
    var owl = $(".owl-demo");
    owl.owlCarousel({

        // navigation : true, // показывать кнопки next и prev

        // pagination: true,
        items : 1,
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        autoWidth: true,
        autoHeight: true
    });

    $('.owl-prev').on('click',function(){

        owl.trigger("owl.prev");
    });

    $('.owl-next').on('click',function(){
        owl.trigger("owl.next");
    });
/* ===================================== */
    var owl1 = $(".owl-demo1");
    owl1.owlCarousel({
        pagination:false,
        items : 3,
        itemsDesktop : true,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        autoWidth: true,
        autoHeight: true,
        // autoPlay: 3000,
        stopOnHover: true
    });
    /* ======================== */
    var owl4 = $(".owl-demo4");
    owl4.owlCarousel({
        pagination:false,
        items : 4,
        itemsDesktop : true,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        autoWidth: true,
        // autoHeight: true,
        // autoPlay: 3000,
        stopOnHover: true
    });
    $('.owl-prev4').on('click',function(){
    owl.trigger("owl.prev");
    });

    $('.owl-next4').on('click',function(){
        owl.trigger("owl.next");
    });
/* =========================== */
    // $(window).resize(function() {
    if($(this).width()<=768){
        // owl7.options.items = 1;
        owl7.data('owlCarousel').reinit({
            items : 1
        });
        owl6.data('owlCarousel').reinit({
            items : 1
        });
        owl1.data('owlCarousel').reinit({
            items : 1
        });
    }
    if($(this).width()>768){
        // owl7.options.items = 1;
        owl7.data('owlCarousel').reinit({
            items : 4
        });
        owl6.data('owlCarousel').reinit({
            items : 4
        });
        owl1.data('owlCarousel').reinit({
            items : 3
        });
    }

    // });
/* ========================================== */
    var d =  new Date(2016,10,30);
   function test() {
        var mDay=parseInt(d.getDay());
        var mHour=parseInt(d.getHours());
        var mMinute=d.getMinutes();
        // var mMinute=d.getSeconds();
       // $('#sct-3-day').replaceWith(mDay);
       // $('#sct-3-hour').replaceWith(mHour);
       // $('#sct-3-minute').replaceWith(mMinute);
       //    alert(mDay+'  '+mHour+' '+mMinute);
   };

    // setInterval( test, 1000);

    });


/* slider   input range */
/* ============================== */
function getVals(){
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat( slides[0].value );
    var slide2 = parseFloat( slides[1].value );
    // Neither slider will clip the other, so make sure we determine which is larger
    if( slide1 > slide2 ){ var tmp = slide2; slide2 = slide1; slide1 = tmp; }

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    // displayElement.innerHTML = "$ " + slide1 + "k - $" + slide2 + "k";
}

window.onload = function(){
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
    for( var x = 0; x < sliderSections.length; x++ ){
        var sliders = sliderSections[x].getElementsByTagName("input");
        for( var y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}
/* ================================== */

/* ======================SLIDER 1 */
$( "#slider-range1" ).slider({
    range: true,
    min: 1,
    max: 45000,
    values: [ 75, 30000 ],
    slide: function( event, ui ) {
        $( "#amount1" ).val( "$" + ui.values[ 0 ]  );
        $( "#amount2" ).val( "$" + ui.values[ 1 ]   );
    }
});
// $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//     " - $" + $( "#slider-range" ).slider( "values", 1 ) );

$( "#amount1" ).val( "$" + $( "#slider-range1" ).slider( "values", 0 )  );
$( "#amount2" ).val( "$" + $( "#slider-range1" ).slider( "values", 1 )  );

/* ===================SLIDER 2 */

$( "#slider-range2" ).slider({
    range: true,
    min: 20000,
    max: 3000000,
    values: [ 10000, 5000000 ],
    slide: function( event, ui ) {
        $( "#amount11" ).val( "$" + ui.values[ 0 ]  );
        $( "#amount22" ).val( "$" + ui.values[ 1 ]   );
    }
});
// $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//     " - $" + $( "#slider-range" ).slider( "values", 1 ) );

$( "#amount11" ).val( "$" + $( "#slider-range2" ).slider( "values", 0 )  );
$( "#amount22" ).val( "$" + $( "#slider-range2" ).slider( "values", 1 )  );
/* =================================== */
$('.icomoon-chevron-up').on('click',function(){

    $('.form-filter').toggle('slow').toggleClass('form-hide-filter');
    $('.form-hide span').html('Свернуть фильтр');
    if ($('.form-filter').hasClass('form-hide-filter')){
        $('.form-hide span').html('Установить фильтр');

    }

});
$('.form-exit').on('click',function(){
    // alert();
    $('.form-filter label> span.span-checked').removeClass('span-checked').addClass('span-not-checked');
});

$('.form-filter label').on('click',function(){
    // alert($(this).html());
    $('span').removeClass('span-not-checked');
    $(this +' span').addClass('span-checked');
})

 




