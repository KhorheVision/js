function calc() {
    /* Калькулятор Start*/
    const result = document.querySelector('.calculating__result span');


    let sex, height, weight, age, ratio;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    } // в localStorage записываем ключ sex и его изменения

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375);
    } // работает также как и выше только с физической активностью

    function initLocalSettings(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.classList.remove(activeClass); // удаляем класс активности
            if (elem.getAttribute('id') === localStorage.getItem('sex')) {
                elem.classList.add(activeClass);
            } //если id совпадает со значением из localStorage то добавляем класс активности
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            } // смысл такой же как и выше
        });
    } //функция будет срабатывать один раз, чтобы установить активный класс на нужные блоки

    initLocalSettings('#gender div', 'calculating__choose-item_active');
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !ratio) {
            result.textContent = '____';
            return;
        } // если хоть в одно переменной нет значения, то результат будет показывать ____

        if (sex === 'female') {
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        } // формула расчёта в зависимости от того какой пол выбран
    }

    calcTotal();

    function getStaticInformation(Selector, activeClass) {
        const elements = document.querySelectorAll(Selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (event) => {
                if (event.target.getAttribute('data-ratio')) {
                    // если такой атрибут пресутствует у объекта события, то ratio присваиваем значение атрибута у дива по которому кликнули
                    ratio = +event.target.getAttribute('data-ratio');
                    localStorage.setItem('ratio', +event.target.getAttribute('data-ratio')); // запоминается выбраная физическая активность в localStorage
                } else {
                    // если условие не стработает, то мы понимаем, что работаем с полом. получаем id
                    sex = event.target.getAttribute('id');
                    localStorage.setItem('sex', event.target.getAttribute('id')); // запоминается выбраный пол в localStorage
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                }); // удаляем класс активности у всех

                event.target.classList.add(activeClass); // добавляем класс активности на элемент по которому кликнули

                calcTotal();
            }); // отслеживаем клики по родительскому элементу, который содержит все дивы. будем использовать делегирование событий
        });
    } // данную функцию будем использовать на нескольких элементах

    getStaticInformation('#gender div', 'calculating__choose-item_active');
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDinamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = '1px solid red';
            } else {
                input.style.border = 'none';
            } // если пользователь вводит не число, то поле подсвечивается красным

            switch (input.getAttribute('id')) {
                // проверяем какой id у input где вводим информацию
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }

            calcTotal();
        });
    } // функция которая будет обрабатывать каждый отдельный инпут

    getDinamicInformation('#height');
    getDinamicInformation('#weight');
    getDinamicInformation('#age');
    /* Калькулятор End*/
}

export default calc;