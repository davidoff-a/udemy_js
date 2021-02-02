/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять комедия на драма

3) Изменить задний фон постера с фильмом на изображение bg.jpg. Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		'Логан',
		'Лига справедливости',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против...',
	],
};
// 1.
//MY SOLUTION

// document.querySelector('.promo__adv').remove();

// 2.
//My solution
//document.querySelector('.promo__genre').innerHTML = 'ДРАМА';

// 3.
//my solution
//const promoBack = document.querySelector('.promo__bg');
//promoBack.style.backgroundImage = 'url(img/bg.jpg)';

// 4. 5.
// my solution
// const seenFilms = document.querySelector('.promo__interactive-list');
// seenFilms.innerHTML = '';
// movieDB.movies.forEach((item, i) => {
// 	seenFilms.insertAdjacentHTML(
// 		'beforeend',
// 		`<li class="promo__interactive-item">${++i}. ${item}
// 	<div class="delete"></div>
// </li>`
// 	);
// });

//Ivan solution of 1
const adv = document.querySelectorAll('.promo__adv img'),
	poster = document.querySelector('.promo__bg'),
	genre = poster.querySelector('.promo__genre'),
	movieList = document.querySelector('.promo__interactive-list');

adv.forEach((item) => item.remove());
genre.textContent = 'драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';
movieList.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
	movieList.innerHTML += `<li class="promo__interactive-item"> ${i + 1} ${film}
		<div class="delete"></div>
	</li>
	`;
});
// const filmCollection = document.querySelectorAll('.promo__interactive-item');
