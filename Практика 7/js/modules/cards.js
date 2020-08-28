import {
    getResource
} from '../services/services';



function cards() {
    /* Использование Class для карточек Start*/
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
}

export default cards;