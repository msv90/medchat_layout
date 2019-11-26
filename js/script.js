window.onload = function() {

    $('#navbar-admin-toggler').click(function() {
        if($('#navbar-admin-menu').hasClass('hidden')) {
            $('#navbar-admin-menu').removeClass('hidden');
        } else {
            $('#navbar-admin-menu').addClass('hidden');
        }
    });

};