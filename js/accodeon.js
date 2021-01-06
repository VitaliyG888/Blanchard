document.addEventListener('DOMContentLoaded', function () {

	const accordion = document.querySelector('.accordeon');
	let dataTable,

		requestURL = 'data.json',
		request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.onload = function (e) {
		if (request.readyState === 4) {
			if (request.status === 200) {
				dataTable = JSON.parse(request.responseText);

				function accordionSection() {
					for (let i = dataTable.contentDdata.length - 1; i >= 0; i--) {
						let item = dataTable.contentDdata[i];

						let accordionSection = document.createElement("div");
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
				accordionSection();
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
										console.log(event.target.className == link.className);
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
});
