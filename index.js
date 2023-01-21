/*
1 for Home Page #home
2 for About Page #about
3 for Contact Page #contact
*/
var showContaint = 1
function openCloseMenu(e){
    if(e == "open"){
        $('.nav span:contains("menu")').css('display','none')
        $('.nav span:contains("close")').css('display','block')
        $('.nav-item').removeClass('hide');
        $('#home').addClass('hide');
        $('#about').addClass('hide');
        $('#contact').addClass('hide');
    }
    else if(e == "close"){
        $('.nav span:contains("menu")').css('display','block')
        $('.nav span:contains("close")').css('display','none')
        $('.nav-item').addClass('hide');
        showPages()
    }
}
function show(show){
    showContaint = show;
    openCloseMenu("close");
    showPages()
}
function showPages(e){
    if(e != undefined){
        showContaint = e
    }
    if(showContaint == 1){
        $('#home').removeClass('hide');
        $('#about').addClass('hide');
        $('#contact').addClass('hide');
    }
    else if(showContaint == 2){
        $('#about').removeClass('hide');
        $('#home').addClass('hide');
        $('#contact').addClass('hide');
    }
    else if(showContaint == 3){
        $('#contact').removeClass('hide');
        $('#home').addClass('hide');
        $('#about').addClass('hide');
    }
}

function copyEmail(e){
    if(!$(e).find('.fa-clone').hasClass('hide')){
        $(e).find('.fa-clone').addClass('hide');
        navigator.clipboard.writeText(8740092045);
        $(e).find('.fa-check').removeClass('hide');
        alert("Copy");
    }
}
function copyNumber(e){
    if(!$(e).find('.fa-clone').hasClass('hide')){
        $(e).find('.fa-clone').addClass('hide');
        navigator.clipboard.writeText('pallavkhatri99@gmail.com');
        $(e).find('.fa-check').removeClass('hide');
        alert("Copy");
    }
}

$('.btn-tabs button:last').hover(function(){
    $('#education').removeClass("hide");
    $('#experience').addClass("hide");
})
$('.btn-tabs button:first').hover(function(){
    $('#experience').removeClass("hide");
    $('#education').addClass("hide");
})

