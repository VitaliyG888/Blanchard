let eventNews = function () {
	let developmentsCard = document.querySelectorAll('.developments__card'),
		developmentsBtn = document.querySelector('.developments__btn'),
		developmentsNews = document.querySelector('.developments__news');


	developmentsBtn.addEventListener('click', function () {

		developmentsCard.forEach(item => {

			item.style.display = 'block';

			developmentsNews.style.flexWrap = 'wrap';

			developmentsBtn.style.display = 'none';
		})
	});




};

eventNews();
