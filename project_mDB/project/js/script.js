/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять комедия на драма

3) Изменить задний фон постера с фильмом на изображение bg.jpg. Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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

const adv = document.querySelectorAll('.promo__adv img'),
	poster = document.querySelector('.promo__bg'),
	genre = poster.querySelector('.promo__genre'),
	movieList = document.querySelector('.promo__interactive-list'),
	inputFilm = document.querySelector('.adding__input'),
	btnApprove = document.querySelector('button'),
	movieLike = document.querySelector('[type="checkbox"]'),
	movieBuckets = document.querySelectorAll(
		'promo_interactive-item:hover .delete'
	);
adv.forEach((item) => item.remove());
genre.textContent = 'драма';
poster.style.backgroundImage = 'url("img/bg.jpg")';
console.log(movieBuckets);
// ===================

// const filmCollection = document.querySelectorAll('.promo__interactive-item');

// заполняем полеввода,
// нажимаем кнопку,
// вносим название в базу
btnApprove.addEventListener('click', (e) => {
	e.preventDefault();
	if (inputFilm.value !== '' && inputFilm !== null) {
		movieDB.movies.push(inputFilm.value);
		inputFilm.value = '';
		movieList.innerHTML = '';
		movieDB.movies.sort();
		movieDB.movies.forEach((film, i) => {
			if (film.length > 21) {
				film = film.substr(0, 21) + '...';
			}
			movieList.innerHTML += `
			<li class="promo__interactive-item">
				${i + 1}. ${film}
				<div class="delete"></div>
			</li>
			`;
		});
	}
	if (movieLike) {
		console.log('Добавляем любимый фильм');
	}
});

movieList.addEventListener('click', (e) => {
	if (e.target.className != 'delete') {
		return;
	}
	let listItem = e.target.closest('.promo__interactive-item');
	listItem.remove();
});

// onclick = function(event) {
// if (event.target.className != 'remove-button') return;

// let pane = event.target.closest('.pane');
// pane.remove();
// };
// 'click', () => {
// 	// movieDB.movies.push(inputFilm.value);
// 	console.log(inputFilm.value);
// }
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

// ==================
