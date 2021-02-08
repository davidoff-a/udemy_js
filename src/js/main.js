'use strict';

//tabs
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

	//timer

	const deadline = '2021-02-28';

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor((t / 1000) % 60);
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds,
		};
	}
	function getZero(num){
		if (num>=0&&num<10){
			return `0${num}`;
		} else {
			return num;
		}
	}
	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);
			updateClock();
		function updateClock() {
			const t = getTimeRemaining(endtime);
			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			seconds.innerHTML = getZero(t.seconds);
			minutes.innerHTML = getZero(t.minutes);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}
	setClock('.timer', deadline);
	
	// modal

	const modalWindowOpen = document.querySelectorAll('[data-modal]'),
		modalWindowClose = document.querySelector('[data-close]'),
		modalWindow = document.querySelector('.modal');

	modalWindowOpen.forEach((item) => {
		item.addEventListener('click', () => {
			// modalWindow.style.display = 'block';
			modalWindow.classList.add('show');
			modalWindow.classList.remove('hide');
			document.body.style.overflow = 'hidden';
		});
	});

	function modalClose() {
		modalWindow.classList.add('hide');
		modalWindow.classList.remove('show');
		document.body.style.overflow = '';
	}
	modalWindowClose.addEventListener('click', modalClose);

	modalWindow.addEventListener('click', (e) => {
		if (e.target === modalWindow) {
			modalClose();
		}
	});

	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
			modalClose();
		}
	});
});
