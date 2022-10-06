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