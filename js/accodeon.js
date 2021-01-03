document.addEventListener('DOMContentLoaded', function () {



	let accordeonActiveit = function () {

		const accordeonSectionAll = document.querySelectorAll('.js-section');

		[].forEach.call(accordeonSectionAll, function (item, index) {
			if (!index == 0) {
				item.querySelector('.js-content').style.maxHeight = '0px'
			} else if (index == 0) {
				item.querySelector('.js-content').style.maxHeight = item.querySelector('.js-content >*').clientHeight + 'px'
				item.classList.add('active');
			}
			item.addEventListener('click', function () {

				let activeItem = item.classList.contains('active');

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
			})
		})
	}

	accordeonActiveit();

});
