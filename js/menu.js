    // menu 
    const burgerNavElem = document.querySelector('.js-burger');
    const closeBtnElem = document.querySelector('.js-close');
    const menuBurgerElem = document.querySelector('.js-menu');
    const body = document.body;

    let keys = {
      ESC: 27,
    };

    menuBurgerElem.inert = true;

    let previousActiveElement;

    function showMenu() {
      menuBurgerElem.classList.add('menu--showed');
      body.style.overflow = 'hidden';
      document.querySelector('.menu-nav__list').classList.add('menu-header');
      document.querySelector('.header__list').classList.remove('menu-header');;
      document.querySelector('.header__admission').classList.add('active-reversed');
      document.querySelector('.nav-toggle').classList.add('active');
      document.querySelector('.header__magnifier').classList.add('active');
      document.querySelector('.header__close').style.display = 'block';


      (function () {
        'use strict';

        let requestAnimationFrame = window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        let menu = document.querySelector('.menu-header'),
          items = menu.querySelectorAll('a'),
          containers = document.querySelectorAll('h2.title');
        let pageHeight = Math.max(
          document.body.scrollHeight, document.documentElement.scrollHeight,
          document.body.offsetHeight, document.documentElement.offsetHeight,
          document.body.clientHeight, document.documentElement.clientHeight
        );

        menu.onclick = function (e) {
          if (e.target.tagName != 'A') return;
          console.log('A');
          var current = switchLinks(e.target);
          console.log(current);
          selectContainer(current);
          closeMenu();
        }


        function switchLinks(el) {
          var current;
          [].forEach.call(items, function (item, index) {
            if (item === el) {

              current = index;
            }
          });
          return current;
        }

        function selectContainer(current) {
          [].forEach.call(containers, function (container, index) {
            if (index == current) {
              let startY = container.getBoundingClientRect().top - 30,
                direction = (startY < 0) ? -1 : (startY > 0) ? 1 : 0;
              if (direction == 0) return;
              scroll(container, direction);
            }
          });
        }

        function scroll(el, direction) {
          let duration = 3000,
            start = new Date().getTime();

          var fn = function () {
            let top = el.getBoundingClientRect().top - 30,
              now = new Date().getTime() - start,
              result = Math.round(top * now / duration);

            result = (result > direction * top) ? top : (result == 0) ? direction : result;
            if (direction * top > 0 && (pageHeight - window.pageYOffset) > direction * document.documentElement.clientHeight) {
              window.scrollBy(0, result);
              requestAnimationFrame(fn);
            }
          }
          requestAnimationFrame(fn);
        }
      })();

      previousActiveElement = document.activeElement;


      Array.from(body.children).forEach((child) => {
        if (child !== menuBurgerElem) {
          child.inert = true;
        }
      });

      menuBurgerElem.inert = false;

      closeBtnElem.focus();


      document.addEventListener('keydown', function (e) {
        console.log(e)
        if (e.keyCode == keys.ESC) {
          closeMenu();
        }
      });
    }

    function closeMenu() {
      menuBurgerElem.classList.remove('menu--showed');
      body.style.overflow = 'initial';
      document.querySelector('.header__list').classList.add('menu-header');
      document.querySelector('.menu-nav__list').classList.remove('menu-header');
      document.querySelector('.header__admission').classList.remove('active-reversed');
      document.querySelector('.nav-toggle').classList.remove('active');
      document.querySelector('.header__magnifier').classList.remove('active');
      document.querySelector('.header__close').style.display = 'none';


      Array.from(body.children).forEach((child) => {
        if (child !== menuBurgerElem) {
          child.inert = false;
        }
      });

      menuBurgerElem.inert = true;

      previousActiveElement.focus();
    }

    burgerNavElem.addEventListener('click', showMenu);
    closeBtnElem.addEventListener('click', closeMenu);
