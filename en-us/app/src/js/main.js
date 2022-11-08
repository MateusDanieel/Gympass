window.addEventListener('resize', function () { 
    "use strict";

    const body = document.querySelector('body');

    if (body.classList.contains('fp-viewing-sec-five') !== true) {
        window.location.reload(); 
    }
    
});

// NAVBAR MENU TOGGLE 
(() => {
    let bt_open = document.querySelector('nav.navbar .bt-open');
    let menu = document.querySelector('aside.menu');
    let bt_close = document.querySelector('aside.menu .bt-close');
    let anchors = document.querySelectorAll('aside.menu a');

    bt_open.addEventListener('click', () => {
        menu.classList.add('active');
    });

    bt_close.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    anchors.forEach((a) => {
        a.addEventListener('click', () => {
            setTimeout(() => {
                menu.classList.remove('active');
            }, 500)
            
        });
    })

    
})();

// START 'fullpage.js'
if(window.innerWidth >= 640 && window.innerWidth < 1248) {
    new fullpage('#fullpage', {
        licenseKey: '',
        autoScrolling:true,
        scrollHorizontally: true,
        credits: { enabled: false },
        scrollOverflow: true,
        scrollBar:false,
        anchors:['sec-one', 'sec-two', 'sec-three', 'sec-four', 'sec-five'],
        //paddingTop: '109px',
    });
} else if (window.innerWidth >= 1248) {
    new fullpage('#fullpage', {
        licenseKey: '',
        autoScrolling:true,
        scrollHorizontally: true,
        credits: { enabled: false },
        scrollOverflow: false,
        scrollBar:false,
        anchors:['sec-one', 'sec-two', 'sec-three', 'sec-four', 'sec-five'],
        //paddingTop: '109px',
    });
} else { 

    new fullpage('#fullpage', {
        licenseKey: '',
        autoScrolling:true,
        scrollHorizontally: true,
        credits: { enabled: false },
        scrollOverflow: true,
        scrollBar:false,
        scrollOverflowMacStyle: true,
        anchors:['sec-one', 'sec-two', 'sec-three', 'sec-four', 'sec-five'],
        //paddingTop: '71.59px' 
    });
}
 
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
    const scroll_arrow = document.querySelector('.ico-scroll');
    const scroll_icons = document.querySelector('.ico-lbm');
    const float_bt = document.querySelector('.float-bt');
    
    function counterAnima() {
        const speed = 200;

        counters.forEach( counter => {
            const animate = () => {
            const value = +counter.getAttribute('data-counter');
            const data = +counter.innerText;
            const time = value / speed;
 
            if(data < value) {
                counter.innerText = Math.ceil(data + time);

                setTimeout(animate, 50);
            } else {
                counter.innerText = value;
            }
        }
        
        animate();
        });
    }

    const bar01 = new ProgressBar.Circle('.circle-progress-01', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 3000,
        color: '#D8385E',
        trailColor: '#B6B6B6',
        trailWidth: 1,
        svgStyle: null
    });

    const bar02 = new ProgressBar.Circle('.circle-progress-02', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 3000,
        color: '#FF4438',
        trailColor: '#B6B6B6',
        trailWidth: 1,
        svgStyle: null
    });

    const bar03 = new ProgressBar.Circle('.circle-progress-03', {
        strokeWidth: 6,
        easing: 'easeInOut',
        duration: 3000,
        color: '#FFB0A7',
        trailColor: '#B6B6B6',
        trailWidth: 1,
        svgStyle: null
    });
        
    let observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (body.classList.contains('fp-viewing-sec-four')) {
                setTimeout(() => {
                    counterAnima();
                    bar01.animate(0.85);
                    bar02.animate(0.77);
                    bar03.animate(0.83);
                }, 1000);
 
            } else {
                setTimeout(() => {
                    counters.forEach((el) => {
                        el.innerText = '0';
                        bar01.animate(0);
                        bar02.animate(0);
                        bar03.animate(0);
                    });
                }, 900);
            }

            if (body.classList.contains('fp-viewing-sec-one') == false) {
                navbar.classList.add('active');
                float_bt.classList.remove('disabled');

            } else {
                navbar.classList.remove('active');
                float_bt.classList.add('disabled');
            }

            if (body.classList.contains('fp-viewing-sec-five')) {
                navbar.classList.add('disabled');
                scroll_arrow.classList.add('disabled');
                scroll_icons.classList.add('disabled');
                float_bt.classList.add('disabled');
            } else {
                navbar.classList.remove('disabled');
                scroll_arrow.classList.remove('disabled');
                scroll_icons.classList.remove('disabled');
            }

        });
    });

    observer.observe(body, {
        attributes: true
    });

})();

(() => {
    const target = document.querySelectorAll('[data-anima]');
    const animationClass = 'animate';
    const section = document.querySelectorAll('.section');
    const body = document.querySelector('body');
    const header = document.querySelector('header');

    header.classList.add(animationClass)

    let observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            section.forEach((el, i, arr) => {
                
                if(el.classList.contains('active')) {
                    setTimeout(() => {
                        el.classList.add(animationClass);
                    }, 1000);
                   
                } else {
                    el.classList.remove(animationClass);
                }
            });
        

        });
    });

    observer.observe(body, {
        attributes: true
    });

    
    /*
    function animeScroll() {
        const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
        target.forEach((el) => {
            if((windowTop) > el.offsetTop) {
                el.classList.add(animationClass);
            } else {
                el.classList.remove(animationClass);
            }
        });
    } 

    animeScroll();

    if(target.length) {
        window.addEventListener('scroll', () => {
            animeScroll();
            console.log('sdasd');
        });
    }
    */
    
})();

// SLICK CAROUSEL
(() => {

    if(window.innerWidth <= 640) {
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

