'use strict';
let numberOfFilms;
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
	start: function () {
		while (
			numberOfFilms === '' ||
			numberOfFilms === null ||
			isNaN(numberOfFilms)
		) {
			numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
			personalMovieDB.count = numberOfFilms;
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');
			if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('Done');
			} else {
				console.log('Error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log('Вы классический зритель');
		} else if (personalMovieDB.count >= 30) {
			console.log('Вы киноман!');
		} else {
			console.log('Произошла ошибка');
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимый жанр под номером ${i}`);
			if (!genre) {
				console.log('Повторный ввод');
				i--;
				// personalMovieDB.genres[i - 1] = genre;
			} else {
				console.log('Записать в базу');
				console.log(genre);
				personalMovieDB.genres[i-1]=genre;
				
			}
		}
	},
	toggleVisibleDB: function () {
		if (personalMovieDB.private === true) {
			personalMovieDB.private = false;
		} else {
			personalMovieDB.private = true;
		}
	},
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB(personalMovieDB.private);
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleDB(personalMovieDB.private);
personalMovieDB.showMyDB(personalMovieDB.private);
