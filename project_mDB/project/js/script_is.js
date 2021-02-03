'use strict';
document.addEventListener('DOMContentLoaded', () => {
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
		addForm = document.querySelector('form.add'),
		addInput = document.querySelector('.adding__input'),
		checkbox = document.querySelector('[type="checkbox"]');

	addForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const newFilm = addInput.value;
		const favorite = checkbox.checked;
		if (newFilm) {
			if (favorite) {
				console.log('Добавляем любимый фильм');
			}
			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);
			createMovieList(movieDB.movies, movieList);
		}
		// addForm.reset();
		event.target.reset();
	});

	function createMovieList(films, parent) {
		parent.innerHTML = '';
		sortArr(movieDB.movies);
		films.forEach((film, i) => {
			if (film.length > 21) {
				film = `${film.substr(0, 21)}...`;
			}
			parent.innerHTML += `
			<li class="promo__interactive-item">
				${i + 1}. ${film}
				<div class="delete"></div>
            </li>
            `;
		});
		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				createMovieList(movieDB.movies, movieList);
			});
		});
	}

	const deleteAdv = (arr) => {
		arr.forEach((item) => {
			item.remove();
		});
	};
	const makeChanges = () => {
		genre.textContent = 'драма';
		poster.style.background = 'url("img/bg.jpg")';
	};
	const sortArr = (arr) => {
		arr.sort();
	};

	makeChanges();
	deleteAdv(adv);
	createMovieList(movieDB.movies, movieList);
});
