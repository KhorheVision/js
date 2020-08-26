" use strict ";

window.addEventListener("DOMContentLoaded", () => {
    /* ТАБЫ Start*/
    const tabs = document.querySelectorAll(".tabheader__item");
    const tabsContent = document.querySelectorAll(".tabcontent");
    const tabsParent = document.querySelector(".tabheader__items");

    function hideTabContent() {
        tabsContent.forEach((item) => {
            item.style.display = "none"; // чаще используют не этот метод, а добавляют специально созданные классы

            /*
                  ПРИМЕР
                  item.classList.add('hide'); - добавляем класс и скрываем элемент
                  item.classList.remove('show'); - удаляем класс чтобы можно было скрыть элемент
                  */
        });

        tabs.forEach((item) => {
            item.classList.remove("tabheader__item_active");
        });
    } // для начала скрываем весь контент. + удаляем класс активности у таба

    function showTabContent(i = 0) {
        tabsContent[i].style.display = "block"; // чаще используют не этот метод, а добавляют специально созданные классы

        /*
            ПРИМЕР
            item.classList.add('show'); - добавляем класс и показываем элемент
            item.classList.remove('hide'); - удаляем класс чтобы можно было показать элемент
            */

        tabs[i].classList.add("tabheader__item_active");
    } // i - это номер элемента в псевдомассиве который мы получили. Показываем по умолчанию 1 элемент с контентом + к первому табу добовляем класс активности.

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target; // отлавливает где был клик

        if (target && target.classList.contains("tabheader__item")) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            }); //item - каждый таб, i - номер таба в псевдомассиве. Если тот элемент в который мы кликнули будет совпадать с элементом который мы перебераем и это один и тотже элемент то мы вызываем 2 функции, которые написали ранее. и в showTabContent(i) мы передаём i - тоесть номер таба который совпал
        }
    });
    /* ТАБЫ End*/

    /* Таймер Start*/
    const deadline = "2020-10-11";

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()); // разница между дедлайном и текущим временем в миллисекундах
        const days = Math.floor(t / (1000 * 60 * 60 * 24)); // получаем сколько суток осталось до нужно даты. 1000 миллисекунд * 60 (количество миллесекунд в одной минуте). 1000 * 60 * 60 (количество миллесекунд в одном часе). 1000 * 60 * 60 * 24 (количество миллесекунд в одних сутках)
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24); // получаем остаток часов до нужно дедлайна. Дни откидываем, а оставшиеся часы записываем
        const minutes = Math.floor((t / 1000 / 60) % 60); // получаем остаток минут до нужно дедлайна. Дни и часы откидываем, а оставшиеся минуты записываем
        const seconds = Math.floor((t / 1000) % 60); // получаем остаток секунд до нужно дедлайна. Дни, часы, минуты откидываем, а оставшиеся минуты записываем

        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }; // возвращаем объект
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    } // функция которая к числам от 1 до 9 добавляет перед ними 0

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector); // получаем блок с таймером
        const days = timer.querySelector("#days");
        const hours = timer.querySelector("#hours");
        const minutes = timer.querySelector("#minutes");
        const seconds = timer.querySelector("#seconds");
        const timeInterval = setInterval(updateClock, 1000);

        updateClock(); //запускаем первый раз чтобы небыло мегания при загрузке страницы

        function updateClock() {
            const t = getTimeRemaining(endtime);

            // отображение на странице
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        } // функция обновления таймера каждую секунду
    } //функция которая установит таймер на страницу

    setClock(".timer", deadline);
    /* Таймер End*/

    /* Модальное окно Start*/
    const modal = document.querySelector(".modal");
    const modalOpen = document.querySelectorAll("[data-modal]");

    modalOpen.forEach((item) => {
        item.addEventListener("click", openModal);
    });

    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        clearTimeout(modalTimerId);
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = "";
    }

    modal.addEventListener("click", (event) => {
        if (
            event.target === modal ||
            event.target.getAttribute("data-close") == ""
        ) {
            closeModal();
        }
    }); //данное собитие выполнится даже в новосозданном элементе

    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape" && modal.style.display === "block") {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal();
            window.removeEventListener("scroll", showModalByScroll); // позволяет сделать так чтобы действие при скролле выполнилось один раз и удалилось
        }
    }

    window.addEventListener("scroll", showModalByScroll);
    /* Модальное окно End*/

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        } // перевод в гривны

        render() {
            const element = document.createElement("div");
            if (this.classes.length === 0) {
                this.element = "menu__item"; // если будем использовать несколько раз
                element.classList.add(this.element);
            } else {
                this.classes.forEach((className) => element.classList.add(className)); // добавляем переданные классы к созданному div
            } // данное условие даёт возможность добавить класс по умолчанию, если мы не передали ни один класс
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
            this.parent.append(element);
        } // отрисовка на странице
    }

    const getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) { // например что-то посло не так, то выкидываем ошибку
            throw new Error(`Could not fetch ${url}, status ${res.status}`); // позволяет выкинуть новую ошибку, которую конструируем руками. Выведет статус ошибки и по какому url
        }

        return await res.json();
    }; // делаем запрос, ожидаем его окончания и преобразуем в обычный объект

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({
                img,
                altimg,
                title,
                descr,
                price
            }) => {
                new MenuCard(img, altimg, title, descr, price, ".menu .container").render();
            });
        }); // с помощью запроса на сервер получаем массив который содержит меню (массив с объектами). перебираем массив через forEach. И тот объект который находится внутри разбираем по отдельным частям и эти же части передаем во внутрь конструктора класса который создаёт новую карточку на странице и сразу размещает

    // Способ который будет формировать классы налету
    // Данный способ можно использовать чтобы вызвать что-то всего 1 раз и шаблоны не нужны
    // getResource('http://localhost:3000/menu')
    //     .then(data => createCard(data));

    // function createCard(data) {
    //     data.forEach(({img, altimg, title, descr, price}) => {
    //         const element = document.createElement('div');

    //         element.classList.add("menu__item");

    //         element.innerHTML = `
    //             <img src=${img} alt=${altimg}>
    //             <h3 class="menu__item-subtitle">${title}</h3>
    //             <div class="menu__item-descr">${descr}</div>
    //             <div class="menu__item-divider"></div>
    //             <div class="menu__item-price">
    //                 <div class="menu__item-cost">Цена:</div>
    //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
    //             </div>
    //         `;
    //         document.querySelector(".menu .container").append(element);
    //     });
    // }

    // new MenuCard(
    //     "img/tabs/vegy.jpg",
    //     "vegy",
    //     'Меню "Фитнес"',
    //     'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    //     9,
    //     ".menu .container",
    //     "menu__item"
    // ).render(); // можно записывать и так. т.е. не приспавивать в какую-нибудь переменную. Просто выполниться 1 раз и ни где нельзя больше использовать

    // new MenuCard(
    //     "img/tabs/elite.jpg",
    //     "elite",
    //     "Меню “Премиум”",
    //     "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    //     14,
    //     ".menu .container",
    //     "menu__item"
    // ).render();

    // new MenuCard(
    //     "img/tabs/post.jpg",
    //     "post",
    //     'Меню "Постное"',
    //     "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    //     21,
    //     ".menu .container",
    //     "menu__item"
    // ).render();
    /* Использование Class для карточек End*/

    /* Использование AJAX и XMLHttpRequest для отправки формы Start*/
    const forms = document.querySelectorAll("form");

    const message = {
        loading: "img/form/spinner.svg",
        success: "Спасибо! скоро с вами свяжемся",
        failure: "Что-то пошло не так...",
    }; // объект фраз которые будут показывать при определенном статусе загрузки данных на сервер

    forms.forEach((item) => {
        bindPostData(item);
    }); // берем все формы и выполняем функцию, которая будет отправлять данные из формы на сервер

    /*     function postData(form) {
              form.addEventListener('submit', (event) => { // использует событие submit которое реагирует на отправку формы
                  event.preventDefault(); // отменяем действие браузера по умолчанию, чтобы страница не перезагружалась

                  const statusMessage = document.createElement('div'); // создаём div где будет выводится информация о статусе
                  statusMessage.classList.add('status'); // добавляем класс для задания в будещем css свойств
                  statusMessage.textContent = message.loading; // будет показывать сообщение 'Загрузка'
                  form.append(statusMessage); // добавляем к форме сообщение о статусе

                  const request = new XMLHttpRequest();
                  request.open('POST', 'server.php'); // Прописываем метод и путь куда будем ссылаться

                  // request.setRequestHeader('Contant-type', 'multipart/form-data'); // когда используем связку XMLHttpRequest объекта и FormData, заголовок устанавливать не нужно, так как он устанавливается автоматически
                  const formData = new FormData(form); // FormData позволяет собрать данные из заполненой формы. В вёрстке обязательно в input надо прописывать атрибут name

                  request.send(formData); // отправка данных из форма на сервер

                  request.addEventListener('load', () => {
                      if (request.status === 200) {
                          console.log(request.response); // смотрим, что ушло на сервер
                          statusMessage.textContent = message.success; // когда всё отправиться изменится сообщение на 'Спасибо! скоро с вами свяжемся'
                          form.reset(); // очищает форму
                          setTimeout(() => {
                              statusMessage.remove();
                          }, 2000); // через две секунды убираем сообщение статуса
                      } else {
                          statusMessage.textContent = message.failure; // когда призойдёт ошибка изменится сообщение на 'Что-то пошло не так...'
                      }
                  }); //отслеживаем загрузку данных на сервер, чтобы можно было реализовать определенные действия на странице. Например загрузка, благодарность и т.д.
              }); // данная функция отправляет данные в обычном формате

          } // функция которая будет отвечать за постинг данных */

    // function postData(form) {
    //     form.addEventListener('submit', (event) => {
    //         event.preventDefault();

    //         const statusMessage = document.createElement('div');
    //         statusMessage.classList.add('status');
    //         statusMessage.textContent = message.loading;
    //         'Загрузка'
    //         form.append(statusMessage);

    //         const request = new XMLHttpRequest();
    //         request.open('POST', 'server.php');

    //         request.setRequestHeader('Contant-type', 'application/json'); // задаём заголовок, чтобы сказать что будет JSON
    //         const formData = new FormData(form);

    //         const object = {}; // создаём пустой объект
    //         // перебер formData c помощью цикла forEach и поместим данные в пустой объект, который создали выше
    //         formData.forEach(function (value, key) {
    //             object[key] = value;
    //         }); // Получаем новый обычный объект с данными

    //         const jsonData = JSON.stringify(Object); // превращаем обычный объект в json-объект, который можно отправить на сервер

    //         request.send(jsonData);

    //         request.addEventListener('load', () => {
    //             if (request.status === 200) {
    //                 console.log(request.response);
    //                 statusMessage.textContent = message.success;
    //                 form.reset();
    //                 setTimeout(() => {
    //                     statusMessage.remove();
    //                 }, 2000);
    //             } else {
    //                 statusMessage.textContent = message.failure;
    //             }
    //         });
    //     });

    // }  // данная функция отправляет данные в формате JSON

    const postData = async (url, data) => { // async говорит, что внутри функции будет асинхронный код
        let res = await fetch(url, { // await ставим перед теми операциями, которые нужно дождаться результата
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: data
        });

        return await res.json();
    }; // функционал по общению с сервером. Функция настраивает запрос. Отправляет запрос на сервер, получает ответ и трансформирует в json

    /*     function bindPostData(form) {
            form.addEventListener("submit", (event) => {
                event.preventDefault();

                let statusMessage = document.createElement("img"); //создаём элемент img
                statusMessage.src = message.loading; // передаём ссылку на картинку в атрибут src
                statusMessage.style.cssText = `
                    display: block;
                    margin: 0 auto;
                    width: 50px;
                    height: 50px;
                `;

                form.insertAdjacentElement("afterend", statusMessage); // добавляем нашу картинку загрузки после формы

                // const request = new XMLHttpRequest();
                // request.open('POST', 'server.php');

                const formData = new FormData(form);

                const object = {}; // создаём пустой объект
                // перебер formData c помощью цикла forEach и поместим данные в пустой объект, который создали выше
                formData.forEach(function (value, key) {
                    object[key] = value;
                }); // Получаем новый обычный объект с данными

                // request.send(formData);
                //   fetch("server.php", {
                //     method: "POST",
                //     // headers: {
                //     //     'Contant-type': 'application/json'
                //     // }, // не пишем так как отправляем formData. Если ниже прописываем JSON.stringify(Object), то надо раскомментировать
                //     body: formData, // прописываем JSON.stringify(Object) если хотим отрпавить json объект
                //   })
                postData("http://localhost:3000/requests", JSON.stringify(object))
                    // .then((data) => data.text()) // превращаем ответ в обычный текст
                    .then((data) => {
                        console.log(data);
                        showThanksModal(message.success);
                        statusMessage.remove();
                    })
                    .catch(() => {
                        showThanksModal(message.failure);
                    })
                    .finally(() => {
                        form.reset();
                    });

                // request.addEventListener('load', () => {
                //     if (request.status === 200) {
                //         console.log(request.response);
                //         showThanksModal(message.success);
                //         form.reset();
                //         statusMessage.remove();
                //     } else {
                //         showThanksModal(message.failure);
                //     }
                // });
            });
        } */

    function bindPostData(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();

            let statusMessage = document.createElement("img");
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
                width: 50px;
                height: 50px;
            `;

            form.insertAdjacentElement("afterend", statusMessage);

            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // в начале берем formData и преврашаем в массив масивов. Потом превращаем в классический объект. А после превращаем в json
            // Object.fromEntries -  преобразует список пар ключ-значение в объект.

            postData("http://localhost:3000/requests", json)
                .then((data) => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });

        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector(".modal__dialog");

        prevModalDialog.classList.add("hide");
        openModal();

        const thanksModal = document.createElement("div");
        thanksModal.classList.add("modal__dialog");
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector(".modal").append(thanksModal); // добавляем созданное модальное окно со статусом
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add("show");
            prevModalDialog.classList.remove("hide");
            closeModal();
        }, 4000); // через 4 секунды будем убирать thanksModal, чтобы обратно отобразить форму. также закрываем модальное окно
    } // функция которая добавит красоты после отправки формы
    /* Использование AJAX и XMLHttpRequest для отправки формы End*/

    //   fetch("http://localhost:3000/menu")
    //     .then((data) => data.json())
    //     .then((res) => console.log(res)); // в итоге с сервера придёт массив с объектами
});