	let eventNews = function () {
		let developmentsCard = document.querySelectorAll('.developments__card'),
			developmentsBtn = document.querySelector('.developments__btn');


		developmentsBtn.addEventListener('click', function () {

			developmentsCard.forEach(item => {

				item.style.display = 'block';

				developmentsBtn.style.display = 'none';
			})
		});
	};

	eventNews();
