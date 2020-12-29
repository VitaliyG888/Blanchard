const burger = document.querySelector('.js-burger');
const close = document.querySelector('.header__close');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header__nav');
const body = document.body;

let keys = {
	ESC: 27,
};

function showMenu() {
	menu.classList.add('menu--showed');
	body.style.overflow = 'hidden';
	document.querySelector('.menu-toggle__header').after(nav);
	nav.classList.add('nav--showed');

	document.querySelector('.header__close').style.display = 'block';
	document.querySelector('.nav-toggle').style.display = 'none';
	document.querySelector('.admission').style.display = 'block';
	document.querySelector('.search__magnifier').style.display = 'none';
	document.querySelector('.header__logo').style.marginRight = '40px';

	document.addEventListener('keydown', function (e) {
		console.log(e)
		if (e.keyCode == keys.ESC) {
			closeMenu();
		}
	});
}

function closeMenu() {
	menu.classList.remove('menu--showed');
	body.style.overflow = 'initial';
	document.querySelector('.header__logo').after(nav);
	document.querySelector('.header__close').style.display = 'none';
	document.querySelector('.nav-toggle').style.display = 'block';
	document.querySelector('.admission').style.display = 'none';
	document.querySelector('.search__magnifier').style.display = 'block';
	document.querySelector('.header__logo').style.marginRight = '110px';
	document.querySelector('.header__nav').classList.remove('nav--showed')
}

nav.addEventListener('click', closeMenu);

burger.addEventListener('click', showMenu);
close.addEventListener('click', closeMenu);
