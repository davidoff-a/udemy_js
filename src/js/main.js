'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const parentTab = document.querySelector('.tabheader__items'),
		tabs = parentTab.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent');

	function hideContent() {
		tabsContent.forEach((item) => {
			item.classList.add('hide');
			if (item.classList.contains('show')) {
				item.classList.remove('show', 'fade');
				item.classList.add('hide');
			}
		});
		tabs.forEach((item) => {
			if (item.classList.contains('tabheader__item_active')) {
				item.classList.remove('tabheader__item_active');
			}
		});
	}
	function showContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	parentTab.addEventListener('click', (event) => {
		const target = event.target;
		tabs.forEach((item, i) => {
			if (target && target === item) {
				hideContent();
				showContent(i);
			}
		});
	});
	hideContent();
	showContent();
	console.log('done');
});
