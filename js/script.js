window.onload = function () {
    arrowscroll()
};
window.onscroll = function () {
    scroll(), arrowscroll()
};



function scroll() {
    if (document.documentElement.scrollTop > 15) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-80px";
    }
}


$("#about_nav").click(function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});

$("#contact_nav").click(function () {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
});

$("#project").click(function () {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
});

$("#home").click(function () {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
});

$("#arrow").click(function () {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
});

$("#logo").click(function () {
    $('html, body').animate({
        scrollTop: $("#top").offset().top
    }, 1000);
});

$("#know_more").click(function () {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
});
