'use strict';

$(document).ready(function() {
    /* VAR */
    var wDevice = window.innerWidth;
    var hDevice = window.innerHeight;

    /* SECTION 1 */
    var section1AnimMenu = new TimelineMax();
    var section1AnimLogo = new TimelineMax();
    var section1AnimContain = new TimelineMax();

    /* FULL PAGE */
    $('#fullpage').fullpage({
    	navigation: true,
    	navigationPosition: 'right',
        anchors: ['home', 'concept', 'thirdPage', 'fourthPage', 'fivePage', 'sixPage', 'demo', 'eightPage', 'teamPage'],
        onLeave: function(index, nextIndex, direction){
            var xContainLeft = $(".section:nth-child("+nextIndex+") .container-x").width();
            var rowLeft = $(".section:nth-child("+nextIndex+") .row-left");
            var rowRight = $(".section:nth-child("+nextIndex+") .row-right");
            var video = $(".section:nth-child("+nextIndex+") video");
            var rowLeftAnim = new TimelineMax();
            var rowRightAnim = new TimelineMax();

            if (nextIndex == 2 || nextIndex == 3 || nextIndex == 4) {
                video.get(0).play();
            }

            if (nextIndex != 9) {
                rowLeftAnim.fromTo(rowLeft, 1, {x: -500, alpha: 0}, {x: 0, alpha: 1, ease: Power4.easeInOut}, 0.2);
                rowRightAnim.fromTo(rowRight, 1, {x: wDevice, alpha: 0}, {x: 0, alpha: 1, ease: Power4.easeInOut}, 0.2);                
            }
        }
    });

    init ();
    
    if (wDevice <= 680) {
        mobile ();
    } else {
        animInit ();
    }


    /* INIT */
    function init () {
        var moreLink = $('#more');
        moreLink.click(function () {
            $.fn.fullpage.moveTo(2);
        }); 

        var btnDemo = $('.btn-demo');
        btnDemo.click(function () {
            btnDemo.removeClass('active');
            $(this).addClass('active');
        });

        var discoverVideo = $('#baseline + a');
        discoverVideo.on('click', openPopup);
    }

    /* MOBILE */
    function mobile () {
        var menu = $('#menu ul');
        var burger = $('#burger');
        var hLink = (hDevice - 59) / 5;
        var link = $('#menu ul a');

        menu.height(hDevice);
        link.height(hLink);

        burger.click(function () {
            if (menu.hasClass('active')) {
                menu.removeClass('active');
                $(this).removeClass('active');
            } else {
                menu.addClass('active');
                $(this).addClass('active');
            }
        }); 
    }

    /* POPUP */
    function openPopup () {
        var overlay = $('#overlay-teaser');
        var popup = $('#popup-teaser');
        var animPopup = new TimelineMax ();
        var yContain = (hDevice / 2) - 500;
        var overlayClick = $('#overlay-click');

        overlay.addClass('active');
        animPopup.fromTo(popup, 1, {y: -yContain, alpha: 0}, {y: 0, alpha: 1, ease: Power4.easeInOut}, 0);  
        overlayClick.on('click', closePopup);
    }

    function closePopup () {
        var overlay = $('#overlay-teaser');
        var popup = $('#popup-teaser');
        var animPopupClose = new TimelineMax ();
        var yContain = (hDevice / 2) - 500;
        animPopupClose.to(popup, 1, {y: -yContain, alpha: 0, ease: Power4.easeInOut}, 0); 
        overlay.removeClass('active');
    }

    /* ANIM */
    function animInit () {
        var yContain = (hDevice / 2) - 288;
        section1AnimMenu.staggerFromTo("#menu ul li", 0.8, {y: -150, alpha: 0}, {y: 0, alpha: 1}, 0.2);
        section1AnimLogo.fromTo("#logo", 0.8, {x: -150, alpha: 0}, {x: 0, alpha: 1, ease: Power4.easeInOut}, 0.2);
        section1AnimContain.fromTo(".one .container", 0.8, {y: yContain, alpha: 0}, {y: 0, alpha: 1, ease: Power4.easeInOut}, 0.2);
    }
});
