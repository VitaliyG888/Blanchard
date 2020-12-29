;
(function () {
	'use strict';

	let requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;

	let menu = document.querySelector('.header__nav'),
		items = menu.querySelectorAll('a'),
		containers = document.querySelectorAll('h2.title');
	let pageHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);

	menu.onclick = function (e) {
		if (e.target.tagName != 'A') return;
		let current = switchLinks(e.target);
		selectContainer(current);
		console.log(e.target);
	}


	function switchLinks(el) {
		let current;
		[].forEach.call(items, function (item, index) {
			item.classList.remove('active');
			if (item === el) {
				item.classList.add('active');
				current = index;
			}
		});
		return current;
	}

	function selectContainer(current) {
		[].forEach.call(containers, function (container, index) {
			if (index == current) {
				let startY = container.getBoundingClientRect().top - 30,
					direction = (startY < 0) ? -1 : (startY > 0) ? 1 : 0;
				// console.log(container);
				// console.log(current);
				// console.log(direction);
				// console.log(index);
				if (direction == 0) return;
				scroll(container, direction);
			}
		});
	}

	function scroll(el, direction) {
		let duration1 = 15000,
			start = new Date().getTime();

		let fn = function () {
			let top = el.getBoundingClientRect().top - 30,
				now = new Date().getTime() - start,
				result = Math.round(top * now / duration1);
			// console.log(start);
			// console.log(top);
			// console.log(now);
			// console.log(result);

			result = (result > direction * top) ? top : (result == 0) ? direction : result;
			if (direction * top > 0 && (pageHeight - window.pageYOffset) > direction * document.documentElement.clientHeight) {
				window.scrollBy(0, result);
				requestAnimationFrame(fn);
			}
		}
		requestAnimationFrame(fn);
	}
})();
