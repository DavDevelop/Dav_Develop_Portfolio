$(document).ready(function() {

    $listItems = $('ul li');
        
        $('.page-container').css({'margin-top': '5px', 'opacity': '0'}).animate({
            'margin-top' : '25px',
            'opacity' : '1'
        }, 1000);

    $listItems.hide().each(function(item) {
        $(this).delay(80 * item).fadeIn(400);
    })

    $listItems.on('click', function(event) {
        let $clickedItem = $(this);

        if (!$(event.target).is('[contenteditable="true"]') && !$(event.target).is('img[src="images/remove.png"]')) {
            if($clickedItem.hasClass('red') || $clickedItem.hasClass('normal')){
                $clickedItem.removeClass('red normal').addClass('green');
                if ($clickedItem.has('div #img-container')){
                    $clickedItem.find('#img-container').remove();
                }
            } else{
                $clickedItem.removeClass('green').addClass('red');
                $clickedItem.append('<div id="img-container"><img src="images/remove.png" alt="remove"></div>');
                
                $clickedItem.find('#img-container').on('click', function() {
                    $(this).parent('li').slideUp(function() {
                        $(this).remove();
                    });
                })
            }
        }
    });

    //counter

    $('#counter').text($listItems.length);

    let observer = new MutationObserver(function(){
        $listItems = $('ul li');
        console.log($listItems.length)
        $('#counter').text($listItems.length);
    })

    observer.observe($('ul')[0], {
        childList: true
    })



    //

        const elemento = document.getElementById('text');
        elemento.style.marginTop = '20px';
        console.dir(elemento);

});