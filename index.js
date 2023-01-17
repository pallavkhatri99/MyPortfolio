function openCloseMenu(e){
    if(e == "open"){
        $('.nav span:contains("menu")').css('display','none')
        $('.nav span:contains("close")').css('display','block')
        $('.nav-item').removeClass('hide');
        $('#home').addClass('hide');
    }
    else if(e == 'close'){
        $('.nav span:contains("menu")').css('display','block')
        $('.nav span:contains("close")').css('display','none')
        $('.nav-item').addClass('hide');
        $('#home').removeClass('hide');
    }
}