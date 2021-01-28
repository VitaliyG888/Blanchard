document.addEventListener('DOMContentLoaded', function () {

	let screenWidth1650 = window.matchMedia('(max-width: 1650px)'),
		screenWidth1200 = window.matchMedia('(max-width: 1200px)'),
		screenWidth750 = window.matchMedia('(max-width: 750px)'),
		headerNav = document.querySelector('#header-nav'),
		searchBtn = document.querySelector('#search-btn'),
		headerClose = document.querySelector('.header__close'),
		headerAdmission = document.querySelector('.header__admission'),
		headerLogo = document.querySelector('.header__logo'),
		headerSearchInput = document.querySelector('#header__search-input');

	const editAccAdapt = function () {
		let editionsCheckAll = document.querySelectorAll('.editions__check'),
			editionsList3 = document.querySelector('.editions__list--3');

		[].forEach.call(editionsCheckAll, function (item) {
			let editionsLabelChecked = document.querySelector(`[for="${item.id}"]`);
			editionsList3.append(item);
			editionsList3.append(editionsLabelChecked);
		});

		document.querySelector('.editions__list--1').remove();
		document.querySelector('.editions__list--2').remove();

		let accEditContent = document.querySelector('.editions__list'),
			accEditTitle = document.querySelector('.editions__docket');

		let accordeonActiveit = function () {
			let editionsCheckboks = document.querySelector('.editions__checkboks');

			accEditContent.style.maxHeight = '0px';

			accEditTitle.addEventListener('click', function () {

				[].forEach.call(editionsCheckAll, function (item) {

					let editionsLabelChecked = document.querySelector(`[for="${item.id}"]`);

					if (item.checked) {
						editionsCheckboks.append(item);
						editionsCheckboks.append(editionsLabelChecked);
					} else {
						editionsList3.append(item);
						editionsList3.append(editionsLabelChecked);
					}
				})

				if (this.classList.contains('active')) {
					this.classList.remove('active');
					accEditContent.style.maxHeight = '0px'
				} else {
					this.classList.add('active');
					accEditContent.style.maxHeight = document.querySelector('.editions__list >*').clientHeight + 'px'
				}
			})
		}
		accordeonActiveit();
	};

	if (document.documentElement.clientWidth < 1650) {
		document.querySelector("#card1Description").innerHTML = "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава...";
		document.querySelector("#card2Description").innerHTML = "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянный...";
		document.querySelector("#card3Description").innerHTML = "Идейные соображения высшего порядка, а также современная методология разработки играет важную роль в формировании глубокомысленных рассуждений. Также как перспективное...";
		document.querySelector("#card4Description").innerHTML = "Внезапно, реплицированные с зарубежных источников, современные исследования представляют собой не...";
		document.querySelector("#card5Description").innerHTML = "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын...";
		document.querySelector("#name4").innerHTML = "Николай Ильин<br><span>Кричевский, Вла...</span>";
		document.querySelectorAll("#name5").forEach(el => {
			el.innerHTML = "Модульные сет...<br><span>Мюллер-Брокма...</span>";
		});
		document.querySelectorAll("#name6").forEach(el => {
			el.innerHTML = "Эволюция граф...<br><span >Хеллер, Чваст</span>";
		});
		document.querySelectorAll("#name7").forEach(el => {
			el.innerHTML = "Искусство и ви...<br><span>Арнхейм, Рудольф </span>";
		});
		headerNav.after(searchBtn);
	}

	screenWidth1650.addEventListener('change', function (e) {
		if (e.matches) {
			document.querySelector("#card1Description").innerHTML = "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава...";
			document.querySelector("#card2Description").innerHTML = "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянный...";
			document.querySelector("#card3Description").innerHTML = "Идейные соображения высшего порядка, а также современная методология разработки играет важную роль в формировании глубокомысленных рассуждений. Также как перспективное...";
			document.querySelector("#card4Description").innerHTML = "Внезапно, реплицированные с зарубежных источников, современные исследования представляют собой не...";
			document.querySelector("#card5Description").innerHTML = "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын...";
			document.querySelector("#name4").innerHTML = "Николай Ильин<br><span>Кричевский, Вла...</span>";
			document.querySelectorAll("#name5").forEach(el => {
				el.innerHTML = "Модульные сет...<br><span>Мюллер-Брокма...</span>";
			});
			document.querySelectorAll("#name6").forEach(el => {
				el.innerHTML = "Эволюция граф...<br><span >Хеллер, Чваст</span>";
			});
			document.querySelectorAll("#name7").forEach(el => {
				el.innerHTML = "Искусство и ви...<br><span>Арнхейм, Рудольф </span>";
			});
		} else {
			document.querySelector("#card1Description").innerHTML = "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело.";
			document.querySelector("#card2Description").innerHTML = "Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: постоянный количественный рост и сфера нашей активности представляет собой интересный эксперимент проверки новых принципов формирования...";
			document.querySelector("#card3Description").innerHTML = "Идейные соображения высшего порядка, а также современная методология разработки играет важную роль в формировании глубокомысленных рассуждений. Также как перспективное планирование играет определяющее значение для новых принципов формирования материально-технической и кадровой базы.";
			document.querySelector("#card4Description").innerHTML = "Внезапно, реплицированные с зарубежных источников, современные исследования представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть рассмотрены исключительно в разрезе маркетинговых и финансовых...";
			document.querySelector("#card5Description").innerHTML = "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело.";
			document.querySelector("#name4").innerHTML = "Николай Ильин<br><span>Кричевский, Владимир </span>";
			document.querySelectorAll("#name5").forEach(el => {
				el.innerHTML = "Модульные сетки в граф...<br><span>Мюллер-Брокманн, Йозеф </span>";
			});
			document.querySelectorAll("#name6").forEach(el => {
				el.innerHTML = "Эволюция графических ст...<br><span>Хеллер, Чваст</span>";
			});
			document.querySelectorAll("#name7").forEach(el => {
				el.innerHTML = "Искусство и визуальное в...<br><span>Арнхейм, Рудольф </span>";
			});
		}
	});


	if (document.documentElement.clientWidth < 1200) {
		headerLogo.after(searchBtn);
		headerClose.after(headerNav);
		headerNav.after(headerAdmission);
		document.querySelector('.header__burger').style.display = 'block';
	} else {
		headerSearchInput.after(searchBtn);
		headerLogo.after(headerNav);
		headerNav.after(headerAdmission);
		document.querySelector('.header__burger').style.display = 'none';
	}

	screenWidth1200.addEventListener('change', function (e) {
		if (e.matches) {
			headerLogo.after(searchBtn);
			headerClose.after(headerNav);
			headerNav.after(headerAdmission);
			document.querySelector('.header__burger').style.display = 'block';
		} else {
			headerSearchInput.after(searchBtn);
			headerLogo.after(headerNav);
			headerNav.after(headerAdmission);
			document.querySelector('.header__burger').style.display = 'none';
		}
	});


	if (document.documentElement.clientWidth < 730) {
		document.querySelector('.contacts__title').after(document.querySelector('.contacts__address'));
		document.querySelector('.contacts__title').after(document.querySelector('.contacts__name'));
		editAccAdapt();
	}

	screenWidth750.addEventListener('change', function (el) {
		if (el.matches) {
			document.querySelector('.contacts__title').after(document.querySelector('.contacts__address'));
			document.querySelector('.contacts__title').after(document.querySelector('.contacts__name'));
			editAccAdapt();
		} else {
			window.location.reload();
		}
	});
});
