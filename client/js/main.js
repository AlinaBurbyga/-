$(function(){
          const swiper = new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        
        $('.menu').on('click',function(e){
            e.preventDefault()
            $('.header_top').toggleClass('header_top--open')
        })
})