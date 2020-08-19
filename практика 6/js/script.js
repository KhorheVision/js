/* Задания на урок: практика 5

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

/* Практика 6
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

' use strict ';

document.addEventListener('DOMContentLoaded', () => {
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
    const formBtn = document.querySelector('.add button');
    const inputFilm = document.querySelector('.add .adding__input');
    const inputCheck = document.querySelector('.add input[type=checkbox]');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        }); //удаление рекламны
    };

    const makeChanges = () => {
        //Изменение жанра фильма
        // divGenre.classList.add('promo__genre');
        // divGenre.textContent = 'ДРАМА';
        // genre.replaceWith(divGenre);
        genre.textContent = 'драма';

        //Изменение фона
        bg.style.cssText = 'background: url(./img/bg.jpg)';
    };

    /*     formBtn.addEventListener('click', (event) => {
            event.preventDefault();
            movieDB.movies.push(`${inputFilm.value}`);
            const lastFilm = movieDB.movies[movieDB.movies.length - 1];
            const lasrFilmId = movieDB.movies.length;
            if (lastFilm.length > 21) {
                movieList.innerHTML += `
                <li class="promo__interactive-item">
                    ${lasrFilmId}\) ${lastFilm.slice(0, 22)}...
                    <div class="delete"></div>
                </li>
                `;
            } else {
                movieList.innerHTML += `
                <li class="promo__interactive-item">
                    ${lasrFilmId}\) ${lastFilm}
                    <div class="delete"></div>
                </li>
                `;
            }
            if (inputCheck.checked) {
                console.log('Добавляем любимый фильм');
            }
        }); */

    const sortArr = (arr) => {
        arr.sort(); //сортировка массива по алфавиту
    };

    function createMovieList(films, parent) {
        //Замена списка фильмов на тот кторый находится в этом файле в массиве
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">
                ${i + 1}\) ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});