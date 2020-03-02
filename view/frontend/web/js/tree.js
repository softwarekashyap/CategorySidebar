require(['jquery'], function ($) {
    $(function () {
        $('.ks-sidebar').on('click', '.ks-list .expand, .ks-list .expanded', function () {
            $('.is-active').parents('ul').css('display','block');
            $('.is-active').parents('li').addClass('active');
            $('.is-active').parents('li').find('> span i').removeClass('fa-plus').addClass('fa-minus');
            
            var element = $(this).parent('li');

            if (element.hasClass('active')) {
                element.find('ul').slideUp();
                element.removeClass('active');
                element.find('li').removeClass('active');

                element.find('i').removeClass('fa-minus').addClass('fa-plus');
            } else {
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.parent('ul').find('i').removeClass('fa-minus').addClass('fa-plus');
                element.find('> span i').removeClass('fa-plus').addClass('fa-minus');

                element.addClass('active');
                element.siblings('li').removeClass('active');
                element.siblings('li').find('li').removeClass('active');
                element.siblings('li').find('ul').slideUp();
            }
        });
    });
});
