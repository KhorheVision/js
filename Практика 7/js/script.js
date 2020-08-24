' use strict ';

window.addEventListener('DOMContentLoaded', () => {
    /* ТАБЫ Start*/
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none'; // чаще используют не этот метод, а добавляют специально созданные классы

            /*
            ПРИМЕР
            item.classList.add('hide'); - добавляем класс и скрываем элемент
            item.classList.remove('show'); - удаляем класс чтобы можно было скрыть элемент
            */
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    } // для начала скрываем весь контент. + удаляем класс активности у таба

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block'; // чаще используют не этот метод, а добавляют специально созданные классы

        /*
        ПРИМЕР
        item.classList.add('show'); - добавляем класс и показываем элемент
        item.classList.remove('hide'); - удаляем класс чтобы можно было показать элемент
        */

        tabs[i].classList.add('tabheader__item_active');
    } // i - это номер элемента в псевдомассиве который мы получили. Показываем по умолчанию 1 элемент с контентом + к первому табу добовляем класс активности.


    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target; // отлавливает где был клик

        if (target && target.classList.contains('tabheader__item')) {
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
    const deadline = '2020-10-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()); // разница между дедлайном и текущим временем в миллисекундах
        const days = Math.floor(t / (1000 * 60 * 60 * 24)); // получаем сколько суток осталось до нужно даты. 1000 миллисекунд * 60 (количество миллесекунд в одной минуте). 1000 * 60 * 60 (количество миллесекунд в одном часе). 1000 * 60 * 60 * 24 (количество миллесекунд в одних сутках)
        const hours = Math.floor((t / (1000 * 60 * 60) % 24)); // получаем остаток часов до нужно дедлайна. Дни откидываем, а оставшиеся часы записываем
        const minutes = Math.floor((t / 1000 / 60) % 60); // получаем остаток минут до нужно дедлайна. Дни и часы откидываем, а оставшиеся минуты записываем
        const seconds = Math.floor((t / 1000) % 60); // получаем остаток секунд до нужно дедлайна. Дни, часы, минуты откидываем, а оставшиеся минуты записываем

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
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
        const days = timer.querySelector('#days');
        const hours = timer.querySelector('#hours');
        const minutes = timer.querySelector('#minutes');
        const seconds = timer.querySelector('#seconds');
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

    setClock('.timer', deadline);
    /* Таймер End*/

    /* Модальное окно Start*/
    const modal = document.querySelector('.modal');
    const modalOpen = document.querySelectorAll('[data-modal]');
    const modalClose = document.querySelector('[data-close]');

    modalOpen.forEach(item => {
        item.addEventListener('click', openModal);
    });

    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        clearTimeout(modalTimerId);
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);


    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // позволяет сделать так чтобы действие при скролле выполнилось один раз и удалилось
        }
    }

    window.addEventListener('scroll', showModalByScroll);
    /* Модальное окно End*/

    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        } // перевод в гривны

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
            `;
            this.parent.append(element);
        } // отрисовка на странице
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render(); // можно записывать и так. т.е. не приспавивать в какую-нибудь переменную. Просто выполниться 1 раз и ни где нельзя больше использовать

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container'
    ).render();
    /* Использование Class для карточек Start*/
});