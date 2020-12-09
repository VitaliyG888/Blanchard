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
