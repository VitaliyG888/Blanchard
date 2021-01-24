document.addEventListener('DOMContentLoaded', function () {

	const burger = document.querySelector('.js-burger');
	const close = document.querySelector('.js-close');
	const menu = document.querySelector('.menu-toggle');
	const nav = document.querySelector('.header__nav');
	const admission = document.querySelector('.header__admission');
	const body = document.body;

	let keys = {
		ESC: 27,
	};

	function showMenu() {
		menu.classList.add('menu--showed');
		body.style.overflow = 'hidden';
		document.querySelector('.menu-toggle').appendChild(nav);
		document.querySelector('.menu-toggle').appendChild(admission);
		nav.classList.add('nav--showed');

		document.querySelector('.header__close').style.display = 'block';
		admission.style.display = 'block';

		document.addEventListener('keydown', function (e) {
			if (e.keyCode == keys.ESC) {
				closeMenu();
			}
		});
	}

	function closeMenu() {
		menu.classList.remove('menu--showed');
		body.style.overflow = 'initial';
		document.querySelector('.header__logo').after(nav);
		document.querySelector('.header__container').appendChild(admission);
		document.querySelector('.header__close').style.display = 'none';
		admission.style.display = 'none';
		document.querySelector('.header__nav').classList.remove('nav--showed')
	}

	nav.addEventListener('click', closeMenu);
	burger.addEventListener('click', showMenu);
	close.addEventListener('click', closeMenu);
});
