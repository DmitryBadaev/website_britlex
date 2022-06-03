function burger() {
    "use strict";
    const btnMenu = document.querySelector('.header__burger'),
          btnClose = document.querySelector('.header__close'),
          body = document.querySelector('body'),
          menu = document.querySelector('.menu'),
          menuLink = document.querySelectorAll('.menu__link');
    
    function closeMenu () {
        menu.classList.remove('active');
        body.classList.remove('lock');
    }
    btnMenu.addEventListener('click', ()=> {
        menu.classList.add('active');
        body.classList.add('lock');
    });
    menuLink.forEach((item)=> {
        item.addEventListener('click', ()=>{
            closeMenu();
        });
    });
    menu.addEventListener('click', (e) => {
        if(e.target.classList.contains('menu')) {
            closeMenu();
        }
    });

    btnClose.addEventListener('click', () => {
        closeMenu();
    });
    

}

export default burger;