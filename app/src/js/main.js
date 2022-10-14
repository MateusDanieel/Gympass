// NAVBAR MENU
(() => {
    let bt_open = document.querySelector('nav.navbar .bt-open');
    let menu = document.querySelector('aside.menu');
    let bt_close = document.querySelector('aside.menu .bt-close');

    bt_open.addEventListener('click', () => {
        menu.classList.add('active');
    });

    bt_close.addEventListener('click', () => {
        menu.classList.remove('active');
    });
})();

// SLICK 'sec-work-life'
(() => {

    if(window.innerWidth <= 1248) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            dots: true,
            infinite: false,
            centerMode: true,
            centerPadding: '20px',
            adaptiveHeight: true
        });
    }

})();
 
