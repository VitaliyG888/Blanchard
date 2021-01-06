document.addEventListener('DOMContentLoaded', function () {

	'use strict';

	let baseScroll = function () {
		let requestAnimationFrame = window.requestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.msRequestAnimationFrame;
		window.requestAnimationFrame = requestAnimationFrame;

		let menu = document.querySelector('.header__nav'),
			items = menu.querySelectorAll('.nav-prime__link'),
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
				if (item === el) {
					current = index;
				}
			});
			return current;
		}

		function selectContainer(current) {
			[].forEach.call(containers, function (container, index) {
				if (index == current) {
					let startY = container.getBoundingClientRect().top,
						direction = (startY > 0) ? 1 : 0;
					if (direction == 0) return;
					scroll(container, direction);
				}
			});
		}

		function scroll(el, direction) {
			let duration1 = 10000,
				start = new Date().getTime();

			let fn = function () {
				let top = el.getBoundingClientRect().top,
					now = new Date().getTime() - start,
					result = Math.round(top * now / duration1);

				result = (result > direction * top) ? top : (result == 0) ? direction : result;
				console.log(result);
				if (direction * top > 0 && (pageHeight - window.pageYOffset) > direction * document.documentElement.clientHeight) {
					window.scrollBy(0, result);
					requestAnimationFrame(fn);
				}
			}
			requestAnimationFrame(fn);
		}
	}
	baseScroll();

});
