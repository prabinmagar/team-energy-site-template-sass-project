$(document).ready(function(){
    $('.home-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1
    });

    $('.search-icon').click(function(){
        $('.search-box').toggle('show-search-box');
    });

    $(document).mouseup(function(e){
        let container = $(".search-box");
        if(!container.is(e.target) && container.has(e.target).length === 0){
            container.hide();
        }
    });

    $('.item-img-collection-single').click(function(e){
        let singleItemDiv;
        if($(e.target).hasClass('item-img-collection-single')){
            singleItemDiv = e.target;
        } else {
            singleItemDiv = $(e.target).parent();
        }

        let imgUrl = $(singleItemDiv).children('img').attr('src');
        $('#lg-image-display').children('img').attr('src', imgUrl);
    })
})