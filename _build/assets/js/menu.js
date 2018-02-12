//Фиксация и стилизация синего блока меню
var homepage = document.querySelector('.homepage');
var innerpage = document.querySelector('.innerpage');
let menuBar = document.querySelector('.menubar');
let menuBarButton = document.querySelector('.menubar-button');
var menuBarLogo = document.querySelector('.menubar__logo');
let menu = document.querySelector('.menu');
var menuButtons = document.querySelectorAll('.button-menu');
let menuShow = document.querySelectorAll('.button-menu__show');
let menuHide = document.querySelectorAll('.button-menu__hide');
let menuHeaderButton = document.querySelector('.header-menu');
let menuHeaderDecor = document.querySelector('.header-menu__decor');
let homepageHeader = document.querySelector('.intro__container');
var menuBarGlued;

if (homepage) {
    //фиксация меню при прокрутке
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= homepageHeader.offsetHeight) {
            if (!window.matchMedia('(max-width: 639px)').matches) {
                menuBar.classList.add('menubar_menu');
            }
            return menuBarGlued = true;
        } else {
            if (!menu.classList.contains('menu_opened')) {
                menuBar.classList.remove('menubar_menu');
                return menuBarGlued = false;
            }
        }
    });
     //обработка переключения меню кнопками
    menuButtons.forEach(element => {    
        element.addEventListener('click', function() {
            if (!menu.classList.contains('menu_opened')) {
                menu.classList.remove('hidden');
                menu.classList.add('menu_opened');
                menu.classList.remove('menu-anim-close');
                menu.classList.add('menu-anim-open');
                menuBar.classList.add('menubar_menu');
                menuButtons.forEach(element => {
                    element.classList.add('button-menu_opened');
                });
            } else {
                setTimeout(function(){
                     menu.classList.add('hidden');
                }, 500)
                menu.classList.remove('menu_opened');
                menu.classList.remove('menu-anim-open');
                menu.classList.add('menu-anim-close');
                menuButtons.forEach(element => {
                    element.classList.remove('button-menu_opened');
                });
                if (!menuBarGlued) {
                    menuBar.classList.remove('menubar_menu');
                }
            }
        });
    });
}



if (innerpage) {
    //обработка переключения меню кнопками
    menuButtons.forEach(element => {    
        element.addEventListener('click', function() {
            if (!menu.classList.contains('menu_opened')) {
                menu.classList.remove('hidden');
                menu.classList.add('menu_opened');
                menu.classList.remove('menu-anim-close');
                menu.classList.add('menu-anim-open');
                menuButtons.forEach(element => {
                    element.classList.add('button-menu_opened');
                });
               menuHeaderButton.classList.add('header-menu_fixed');
            } else {
                setTimeout(function(){
                     menu.classList.add('hidden');
                }, 500)
                menu.classList.remove('menu-opened');
                menu.classList.remove('menu-anim-open');
                menu.classList.add('menu-anim-close');
                menuButtons.forEach(element => {
                    element.classList.remove('button-menu_opened');
                });
                menuHeaderButton.classList.remove('header-menu_fixed');
            }
        });
    });
}
