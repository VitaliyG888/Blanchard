const accordion = document.querySelector('.accordeon');
let tabNav = document.querySelectorAll('.tab-nav__link');
let dataTable;
let requestURL;
let tabName;
let accordionSection;

requestUrl();


let tab = function () {
	let tabContent = document.querySelectorAll('.tab');

	tabNav.forEach(item => {
		item.addEventListener('click', selectTabNav)
	});

	function selectTabNav() {
		tabNav.forEach(item => {
			item.classList.remove('is-active__border');
		});
		this.classList.add('is-active__border');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);

		let fot = document.querySelectorAll('.accordeon-section');
		fot.forEach(elem => {
			elem.remove();
		})


		requestUrl();
	}

	function selectTabContent(tabName) {
		tabContent.forEach(item => {
			item.classList.contains(tabName) ? item.classList.add('is-active__description') : item.classList.remove('is-active__description');
		})
	}


};

function requestUrl() {
	tabNav.forEach(el => {
		if (el.classList.contains('is-active__border')) {
			tabName = el.getAttribute('data-tab-name');
			return tabName;
		}
	})

	switch (tabName) {
		case 'tab1':
			requestURL = 'data1.json';
			break;
		case 'tab2':
			requestURL = 'data2.json';
			break;
		case 'tab3':
			requestURL = 'data3.json';
			break;
		case 'tab4':
			requestURL = 'data4.json';
			break;
		case 'tab5':
			requestURL = 'data5.json';
			break;
	};

	request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.onload = function (e) {
		if (request.readyState === 4) {
			if (request.status === 200) {
				dataTable = JSON.parse(request.responseText);

				function accordionSectionBuild() {
					for (let i = dataTable.contentDdata.length - 1; i >= 0; i--) {
						let item = dataTable.contentDdata[i];

						accordionSection = document.createElement("div");
						let accordionBtn = document.createElement("button");
						let accordeonContent = document.createElement("div");
						let accordeonItem = document.createElement("div");
						accordeonContent.classList.add("accordeon-content", "js-content");
						accordeonItem.classList.add("accordeon-item", "flex");
						accordionBtn.innerHTML = item.title;
						if (i == 0) {
							accordionSection.classList.add("accordeon-section", "js-section", "active");
							accordionBtn.classList.add("accordeon-title", "accordeon-title--first");
						} else {
							accordionSection.classList.add("accordeon-section", "js-section");
							accordionBtn.classList.add("accordeon-title");
						}

						accordion.prepend(accordionSection);
						accordionSection.prepend(accordionBtn);
						accordionSection.append(accordeonContent);
						accordeonContent.prepend(accordeonItem);

						for (let j = 0; j < Object.values(item.content).length; j++) {
							let contentBtn = document.createElement('button');
							contentBtn.classList.add("accordeon-link");
							contentBtn.innerHTML = Object.values(item.content)[j];
							accordeonItem.append(contentBtn);
						}
					}
				}

				accordionSectionBuild();

				let accordeonSectionAll = document.querySelectorAll('.js-section'),
					accordeonTitleAll = document.querySelectorAll('.accordeon-title');

				let accordeonActiveit = function () {

					[].forEach.call(accordeonSectionAll, function (item, index) {
						if (!index == 0) {

							item.querySelector('.js-content').style.maxHeight = '0px'
						} else if (index == 0) {
							item.querySelector('.js-content').style.maxHeight = item.querySelector('.js-content >*').clientHeight + 'px'
							item.classList.add('active');
						}

						item.addEventListener('click', function (event) {

							accordeonTitleAll.forEach((elem) => {

								if (event.target == elem) {

									let activeItem = item.classList.contains('active'),
										accordeonLink = item.querySelectorAll('.accordeon-link');

									[].forEach.call(accordeonLink, function (link) {
										if (event.target.className == link.className) {
											event.stopPropagation();
											console.log(event);
										}
									})

									accordeonSectionAll.forEach(function (section) {
										section.querySelector('.js-content').style.maxHeight = '0px'
										if (section.classList.contains('active')) {
											section.classList.remove('active')
										}
									})

									if (activeItem) {
										this.classList.remove('active');
										this.querySelector('.js-content').style.maxHeight = '0px'
									} else {
										this.classList.add('active');
										this.querySelector('.js-content').style.maxHeight = item.querySelector('.js-content >*').clientHeight + 'px'
									}
								}

								event.stopPropagation();
							})
						})
					})
				}
				accordeonActiveit();
			} else {
				console.error(request.statusText);
			}
		}
	};
	request.onerror = function (e) {
		console.error(request.statusText);
	};
	request.send();
}

tab();
