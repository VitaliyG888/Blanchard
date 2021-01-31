document.addEventListener('DOMContentLoaded', function () {


    document.addEventListener('click', function (el) {
		
	const searchBtn = document.getElementById('search-btn'),
	searchForm = document.getElementById('search-form'),
	searchInput = document.getElementById('header__search-input'),
	searchMagLupe = document.querySelector('.search__magnifier--lupe'),
	searchMagPath = document.querySelector('.search__magnifier--path'),
	searchMagRect = document.querySelector('.search__magnifier--rect'),
	headerLogo = document.querySelector('.header__logo'),
	headerBurger = document.querySelector('.js-burger');

			if (document.documentElement.clientWidth < 1200) {
				if (!(el.target.classList.contains('active-search'))) {
					(document.querySelectorAll('.active-search')).forEach((elem) => {
						elem.classList.remove('active-search');
					});
				}
				if (el.target == searchBtn || el.target == searchMagPath || el.target == searchMagLupe || el.target == searchMagRect) {
					el.preventDefault();
					searchForm.classList.add('active-search');
					searchInput.classList.add('active-search');
					headerBurger.classList.add('active-search');
					searchBtn.classList.add('active-search');
					searchMagLupe.classList.add('active-search');
					headerLogo.classList.add('active-search');
				}
			}
	});
});
