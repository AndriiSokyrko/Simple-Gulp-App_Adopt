$(document).ready(function () {
    /*scrol top*/
    $(".fa-angle-up").click(function (){
        $("body,html").animate({
            scrollTop:0
        }, 800);
        return false;
    });
    /*modal form*/
   // $('#myModal[type="submit"]').on('click', function () {

   // $('#sendMail').on('submit', function (e) {
   //     e.preventDefault();
   //     data=$('#myModal').serialize();
   //    // console.log(data);
   //     $.ajax({
   //         url: "/libs/PHPMailer/PHPmailer/mailer/smart.php", // куда отправляем
   //         type: "post", // метод передачи
   //         // dataType: "json", // тип передачи данных
   //         data: data,
   //         // после получения ответа сервера
   //         success: function(data){
   //             alert('succes');
   //             $("#myModal").modal('hide');
   //              $('#messageMail').modal('show') ;
   //         },
   //         error: function (data) {
   //             alert('error');
   //         }
   //     });
   //
   //
   // });

   $('#oFormHead').on('click', function () {
       $('#myModal').css({"top": "25%" } );
            $('#myModal').addClass('animated flip');

   });
    /*waypoint*/
        $('.basic-waypoint').waypoint({
            handler: function (dir) {
                console.log('ID: ' + this.element.id)
                if (dir === 'down') {
                    $(this.element)
                        .removeClass('flip')
                        .addClass('fadeInRight');
                }

                else {
                    $(this.element)
                        .removeClass('fadeInRight')
                        .addClass('flip');
                }
                ;

            },
            offset: '60%'

        });


    /*bgscroll paralax*/
    $(window).stellar();
    /*end paralax*/

    function blueasyTabs() {
        var $wrapper = $('.tab-wrapper'),
            $menu = $wrapper.find('.tab-menu li'),
            $content = $wrapper.find('.thumbs-row');

        $content.not(':first-of-type').hide();
        $content.each(function (i) {
            $(this).attr('data-tab', 'tab-' + i);
        });
        $menu.each(function (i) {
            $(this).attr('data-tab', 'tab-' + i);
        });

        $menu.click(function () {
            var $getWrapper = $(this).closest($wrapper),
                dataTab = $(this).attr('data-tab');

            $getWrapper.find($menu).find('a').removeClass('active');
            $(this).find('a').addClass('active');

            $getWrapper.find($content).hide();
            $getWrapper.find($content).filter('[data-tab=' + dataTab + ']').show();
        });


    }
    //blueasyTabs();
    //end blueasyTabs

    function blueasyMenu() {
        var $trigger = $('.trigger-nav'),
            $menu = $('.trigger-victim');

        $trigger.click(function () {
            $menu.slideToggle();
        });

        $(window).resize(function () {
            if ($(window).width() > 768) {
                $menu.removeAttr('style');
            }
        });
    }

    blueasyMenu();
    /* ==================================== */
    /*  Owl Carousel*/
    $('.owl-carousel').owlCarousel({
        margin: 30,
        nav:true,
        dots: false,
        navText: [
            '<i class="fa fa-angle-left  fa-5x" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right fa-5x" aria-hidden="true"></i>'
        ],
            responsive : {
                // Ширина окна браузера от 0 и больше
                0 : {
                    items:1,

            },
            // Ширина окна браузера от 480 и больше
            480 : {
                items:1,


        },
        // Ширина окна браузера от 768 и больше
        768 : {
            items:3,


    }
}

    // autoWidth: true
    });


    //menu HAMBURGER



    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
    });

//Google map
    function initialize() {
        var myLatlng = new google.maps.LatLng(53.3333,-3.08333),
            mapOptions = {
                zoom: 11,
                center: myLatlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        var map = new google.maps.Map(document.getElementById('map'), mapOptions),
            contentString = 'Some address here..',
            infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 500
            });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);

    
    
    //slickslider

    $('.slickslider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        asNavFor: '.slickslider-nav'
    });
    $('.slickslider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slickslider-for',
        // dots: true,
        centerMode: false,
        arrows: true,
        focusOnSelect: true,
        nextArrow: '<div class="fa fa-angle-right" aria-hidden="true"></div>',
        prevArrow: '<div class="fa fa-angle-left" aria-hidden="true"></div>',

    });
});







