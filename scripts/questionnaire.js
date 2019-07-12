let cachedIndex = sessionStorage.getItem(window.location.href.split('/').slice(-2).join('/'))

$(document).ready(function(){
    if (cachedIndex != null) {
        $(`input[type=radio]`).eq(cachedIndex).attr('checked', true)
    }

    $('input[type=radio]').click(function(){
        var index = $(this).index('input[type=radio]');
        console.log(index, window.location.href.split('/').slice(-2).join('/'));
        sessionStorage.setItem(window.location.href.split('/').slice(-2).join('/'), index)
    });
});

