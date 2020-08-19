/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

' use strict ';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const bg = document.querySelector('.promo__bg');
const genre = bg.querySelector('.promo__genre');
const divGenre = document.createElement('div');
const movieList = document.querySelector('.promo__interactive-list');


adv.forEach(item => {
    item.remove();
}); //удаление рекламны

//Изменение жанра фильма
// divGenre.classList.add('promo__genre');
// divGenre.textContent = 'ДРАМА';
// genre.replaceWith(divGenre);
genre.textContent = 'драма';

//Изменение фона
console.log(bg);
bg.style.cssText = 'background: url(./img/bg.jpg)';

//Замена списка фильмов на тот кторый находится в этом файле в массиве
movieList.innerHTML = "";

movieDB.movies.sort(); //сортировка по алфавиту

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">
        ${i + 1}\) ${film}
        <div class="delete"></div>
    </li>
    `;
});