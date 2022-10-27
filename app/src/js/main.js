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
/*
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
*/
// ANIMATIONS
(() => {
    const body = document.querySelector('body');
    const counters = document.querySelectorAll('.value');
    const navbar = document.querySelector('nav.navbar');
    function counterAnima() {
        const speed = 200;

        counters.forEach( counter => {
            const animate = () => {
            const value = +counter.getAttribute('data-counter');
            const data = +counter.innerText;
            const time = value / speed;

            if(data < value) {
                counter.innerText = Math.ceil(data + time);

                if(value < 1000) {
                    setTimeout(animate, 600);
                } else {
                    setTimeout(animate, 400); 
                }
                
                
            } else {
                counter.innerText = value;
            }
        }
        
        animate();
        });
    }

    window.addEventListener('scroll', () => {
        if(body.className == 'fp-scrollable fp-viewing-sec-four') {
            setTimeout(() => {
                counterAnima();
            }, 1750);
                      
        } else {
            setTimeout(() => {
                counters.forEach((el) => {
                    el.innerText = '0';
                });
            }, 900); 
        }

        if(body.className != 'fp-scrollable fp-viewing-sec-one') {
            navbar.classList.add('active');
            
        } else {
            navbar.classList.remove('active');
            
        }

        if(body.className == 'fp-scrollable fp-viewing-sec-five') {
            navbar.classList.add('disabled');
        } else {
            navbar.classList.remove('disabled');
        }
    });

})();
 
// START 'fullpage.js'
if(window.innerWidth >= 1248) {
    new fullpage('#fullpage', {
        licenseKey: '',
        autoScrolling:true,
        scrollHorizontally: true,
        fadingEffect: true,
        credits: { enabled: false },
        scrollOverflow: false,
        scrollBar:true,
        anchors:['sec-one', 'sec-two', 'sec-three', 'sec-four', 'sec-five']
    });
} else {
    //if (event.cancelable) {event.preventDefault();}

    new fullpage('#fullpage', {
        licenseKey: '',
        autoScrolling:true,
        scrollHorizontally: true,
        fadingEffect: true,
        credits: { enabled: false },
        scrollOverflow: true,
        scrollBar:true,
        anchors:['sec-one', 'sec-two', 'sec-three', 'sec-four', 'sec-five'],
    });
}


// Start 'AOS'
AOS.init();