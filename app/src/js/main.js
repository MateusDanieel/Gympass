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

// SLICK CAROUSEL
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

// TOGGLE 'sec-workplace'
(() => {
    let content = document.querySelector('.sec-workplace .wrap .dir');
    let bt = document.querySelector('.sec-workplace .wrap .dir .bt .toggle');

    bt.addEventListener('click', () => {
        if(content.classList == 'dir active') {
            content.classList.remove('active');
            bt.innerHTML = 'CLOSE';
        } else {
            content.classList.add('active');
            bt.innerHTML = 'SEE DETAILS';
        }
    });
})();
 
// START 'fullpage.js'
new fullpage('#fullpage', {
    licenseKey: '',
    autoScrolling:true,
    scrollHorizontally: true,
    fadingEffect: true,
    credits: { enabled: false },
    scrollOverflow: false,
    scrollBar:true 
});

// Start 'AOS'
AOS.init(); 