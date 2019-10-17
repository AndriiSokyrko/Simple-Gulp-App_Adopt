$(document).ready(function () {

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

        // autoWidth: true
    });



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

});






