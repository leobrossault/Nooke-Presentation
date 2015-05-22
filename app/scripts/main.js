$(document).ready(function() {
    /* VAR */
    var wDevice = window.innerWidth;
    var hDevice = window.innerHeight;

    /* FULL PAGE */
    $('#fullpage').fullpage({
    	navigation: true,
    	navigationPosition: 'right',
        anchors: ['home', 'teaser', 'concept', 'fourthPage', 'fivePage', 'sixPage', 'demo', 'eightPage', 'teamPage'],
    });

    init ();

    if (wDevice <= 680) {
        mobile ();
    }


    /* INIT */
    function init () {
        var moreLink = $("#more");

        moreLink.click(function () {
            $.fn.fullpage.moveTo(2);
        }); 
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
});
