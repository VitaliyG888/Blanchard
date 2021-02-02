document.addEventListener('DOMContentLoaded', function () {
	const btns = document.querySelectorAll('.open-modal');
	const modalOverlay = document.querySelector('.modal');
	const modals = document.querySelectorAll('.modal-wrapper');
	const modalClose = document.querySelector('.modal-close');
	const body = document.body;

	btns.forEach((el) => {
		el.addEventListener('click', (e) => {
			let path = e.currentTarget.getAttribute('data-path');
			modals.forEach((el) => {
				el.classList.remove('modal--visible');
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
			modalOverlay.classList.add('modal-overlay--visible');
			let pagePosition = window.scrollY;
			let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
			body.classList.add('disable-scroll');
			body.dataset.position = pagePosition;
			body.style.top = -pagePosition + 'px';
			document.body.style.paddingRight = paddingOffset;
		});
	});
	modalOverlay.addEventListener('click', (e) => {
		if (e.target == modalOverlay || e.target == modalClose) {
			modalOverlay.classList.remove('modal-overlay--visible');
			modals.forEach((el) => {
				el.classList.remove('modal--visible');
			});
			let pagePosition = parseInt(body.dataset.position, 10);
			body.style.top = 'auto';
			body.classList.remove('disable-scroll');
			window.scroll({
				top: pagePosition,
				left: 0
			});
			body.removeAttribute('data-position');
			document.body.style.paddingRight = '';
		}
	});
});
