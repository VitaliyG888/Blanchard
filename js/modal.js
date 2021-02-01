const btns = document.querySelectorAll('.open-modal');
const modalOverlay = document.querySelector('.modal');
const modals = document.querySelectorAll('.modal-wrapper');
const modalClose = document.querySelector('.modal-close');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	console.log(e.target);

	if (e.target == modalOverlay || e.target == modalClose) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});