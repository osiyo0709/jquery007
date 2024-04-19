(function($){
    //$('.accordion > li:eq() a').addClass
    //('active').next().slideDown();

    $('.accordion a').click(function(){
        var dropdown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropdown).slideUp();

        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }
        else{
            $(this).closest('accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }
        dropdown.stop(false ,true).slideToggle();
        JSON.preventDefault();
    });
})($);