// Toggle menu button
if (
	document.querySelector('#toggleMenu') &&
	document.querySelector('#mainMenu')
) {
	const toggleMenu = document.querySelector('#toggleMenu');
	const mainMenu = document.querySelector('#mainMenu');
	toggleMenu.addEventListener('click', function () {
		if (toggleMenu.classList.contains('active')) {
			toggleMenu.classList.remove('active');
			mainMenu.classList.remove('active');
			document.querySelector('body').classList.remove('menu-open');
		} else {
			toggleMenu.classList.add('active');
			mainMenu.classList.add('active');

			document.querySelector('body').classList.add('menu-open');
		}
	});
}

if (document.querySelector('[data-action="toggle"]')) {
	const toggleButtons = document.querySelectorAll('[data-action="toggle"]');

	[...toggleButtons].forEach((toggleButton) => {
		toggleButton.addEventListener('click', function () {
			const data_name = toggleButton.getAttribute('data-name');
			const data_target = toggleButton.getAttribute('data-target');
			if (
				document.querySelector(
					`[data-name="${data_name}"][data-toggle="${data_target}"]`
				)
			) {
				const targets = document.querySelectorAll(
					`[data-name="${data_name}"][data-toggle="${data_target}"]`
				);
				const images = document.querySelectorAll(
					`[data-toggle][data-name="${data_name}"]`
				);
				[...images].forEach((image_item) => {
					image_item.classList.remove('active');
				});
				[...targets].forEach((target) => {
					target.classList.add('active');
				});
			}
			[...toggleButtons].forEach((tbi) => {
				tbi.classList.remove('active');
			});
			toggleButton.classList.add('active');
		});
	});
}

if (document.querySelector('.blockquote-slider')) {
	tns({
		container: '.blockquote-slider',
		items: 1,
		slideBy: 'page',
		nav: false,
	});
}

if (document.querySelector('.guides-slider')) {
	tns({
		container: '.guides-slider',
		items: 3,
		nav: true,
		gutter: 80,
		slideBy: 1,
		controlsPosition: 'bottom',
		navPosition: 'bottom',
		responsive: {
			0: {
				items: 1,
				gutter: 20,
			},
			900: {
				items: 2,
				gutter: 40,
			},
			1200: {
				items: 3,
				gutter: 80,
			},
		},
	});
}
if (document.querySelector('.logo-slider')) {
	tns({
		container: '.logo-slider',
		items: 7,
		loop: true,
		controls: false,
		nav: false,
		gutter: 0,
		mouseDrag: true,
		slideBy: 1,
		responsive: {
			0: {
				items: 3,
				gutter: 0,
			},
			900: {
				items: 5,
			},
			1200: {
				items: 7,
			},
		},
	});
}

if (document.querySelector('.two-items-slider')) {
	tns({
		container: '.two-items-slider',
		nav: false,
		slideBy: 1,
		responsive: {
			0: {
				items: 1,
				gutter: 0,
			},
			920: {
				items: 2,
				gutter: 80,
			},
		},
	});
}

if (document.querySelector('.cover-slider')) {
	tns({
		container: '.cover-slider',
		nav: false,
		slideBy: 1,
		controlsContainer: '.cover-slider-controls',
	});
}

const spans = Array.from(document.querySelectorAll('.faq-item-title'));

const addClassToSubmenu = (el) => {
	el.target.parentNode.classList.toggle('active');
	el.target.nextElementSibling.classList.toggle('active');
};
spans.forEach((span) => {
	span.addEventListener('click', addClassToSubmenu);
});
function addClass() {
	var popup = document.querySelector('.popup-video');
	popup.classList.add('open');
}
function removeClass() {
	var popup = document.querySelector('.popup-video');
	var video = document.querySelector('.video');
	popup.classList.remove('open');
	video.pause();
}
