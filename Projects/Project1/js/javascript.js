$(document).ready(function(){

    let liItems = $('.list-it');

    
    liItems.each(function(index, item){
        $(item).addClass('item' + (index + 1))
    })

    //giocando con il DOM Traversing ...

    liItems.filter('.item4').css('background-color', 'red');

    liItems.on('mouseenter', function(e) {
        $(e.target).animate({
            paddingLeft : '+=30px'
        }, 300)
    }).on('mouseleave', function(e) {
        $(e.target).stop(true).animate({
            paddingLeft : '5px'
        }, 200)
    })

    //box dimentions

    let newEl = document.createElement('li');

    const el = document.querySelector('.item2');
    el.style.width = '80%';

    let misure = el.offsetWidth;


    $('.list').append(newEl);
    newEl.classList.add('list-it');

    newEl.textContent = misure;

    $(window).on('resize', function() {
        let misure = el.offsetWidth;  
        newEl.textContent = misure;

        //un'altra cosa sempre di dimenzioni box

        $('.list-it:gt(2)').width('50%');
    });

});