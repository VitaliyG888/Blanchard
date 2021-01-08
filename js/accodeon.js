document.addEventListener('DOMContentLoaded', function () {
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
					let namberTab = requestURL.replace(/[^\d]/g, '');

					function accordionSectionBuild() {
						for (let i = dataTable.contentDdata.length - 1; i >= 0; i--) {
							let item = dataTable.contentDdata[i];

							accordionSection = document.createElement("div");
							let accordionBtn = document.createElement("button");
							let accordeonContent = document.createElement("div");
							let accordeonItem = document.createElement("div");
							accordeonContent.classList.add("accordeon-content", "js-content");
							accordeonItem.classList.add("accordeon-item");
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
								contentBtn.classList.add("accordeon-link", "reset-btn", `${Object.keys(item.content)[j]}`);
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

					let trabAcc = function () {
						request2 = new XMLHttpRequest();
						request2.open('GET', `data-name-${namberTab}.json`);
						request2.onload = function (e) {
							if (request2.readyState === 4) {
								if (request2.status === 200) {
									let dataTable2 = JSON.parse(request2.responseText);

									let activeLinkAccordion = document.querySelectorAll(".accordeon-link");
									console.log(activeLinkAccordion);

									activeLinkAccordion.forEach(item => {
										item.addEventListener('click', function (el) {
											let linkName = (el.target.className.replace(/[^\d]/g, '')) - 1;
											console.log(linkName);
											bildingCard(linkName);
										});
									});

									let bildingCard = function (number = 0) {
										const accordeonCard = document.querySelector('.card');
										if (document.querySelector('.card__img')) {
											document.querySelector('.card__img').remove();
										}
										if (document.querySelector('.card__title')) {
											document.querySelector('.card__title').remove();
										}
										if (document.querySelector('.card__date')) {
											document.querySelector('.card__date').remove();
										}
										if (document.querySelector('.card__description')) {
											document.querySelector('.card__description').remove();
										}

										let cardImg = document.createElement("img");
										cardImg.classList.add('card__img');
										cardImg.src = (dataTable2["catalog card"][number].foto)
										let cardTitle = document.createElement("h3");
										cardTitle.classList.add('card__title');
										cardTitle.innerHTML = dataTable2["catalog card"][number].names
										console.log(cardTitle.innerHTML);
										let cardDate = document.createElement("span");
										cardDate.classList.add('card__date', 'signature');
										cardDate.innerHTML = dataTable2["catalog card"][number].date
										let cardDescription = document.createElement("p");
										cardDescription.classList.add('card__description');
										cardDescription.innerHTML = dataTable2["catalog card"][number].descriptions

										accordeonCard.prepend(cardImg);
										accordeonCard.append(cardTitle);
										accordeonCard.append(cardDate);
										accordeonCard.append(cardDescription);

									};

								} else {
									console.error(request2.statusText);
								}
							}
						};
						request2.onerror = function (e) {
							console.error(request2.statusText);
						};
						request2.send();
					}
					trabAcc();
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
});
