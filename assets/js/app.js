$('.dropdown-menu a.dropdown-toggle').on('mouseenter', function(e) {
    if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');


    $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
    });


    return false;
});

$('body').on('mouseenter mouseleave', '.dropdown', function(e) {
    var _d = $(e.target).closest('.dropdown');
    _d.addClass('show');
    setTimeout(function() {
        _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
    }, 300);
});