let username = 'Egor'; // создание переменной

const userYear = 19; // создание константы, которую нельзя менять, также если константа дана в сасос начале, а не вычесляется потом, то имя пишется большими буквами

/* Типы данных:
Числа 1,2,3
Строки, которые записываются '' "" и ``(в данные ковычки можно записывать переменные с помощью записи ${переменная})
Логический тип или boolean (true/false)
null - не созданно
undefinde - нет значения
Symbol - пока не знаю
BigInt - пока не знаю
*/

// typeof() - показывает какой тип данных

// два знака !! превращают в булиновое значение

let mass = []; // создание пустого массива и в него можно поместить объекты, строки, числа и т.д. через запятую. Отсчёт начинается с 0

//массивы не равны друг други даже если у них одинаковые значения внутри


let arrMass = ['1', {},
    [], 25
];
arrMass[0] == '1';
arrMass[2] == []; // сравнение на равенство выдаст в двух случаях true

//Методы массивов
arrMass.push('a'); // добавляет элемент в конец массива
arrMass.pop(); // удаляет последний элемент из массива и возвращает его
arrMass.shift(); // удаляет из массива первый элемент и возвращает его (использовать редко)
arrMass.unshift('a'); // добавляет элемент в начало массива (использовать редко)
arrMass.split(s); // превращает строку в массив, s - разделитель
arrMass.join(s); // превращает массив в строку, s - разделитель
delete arrMass[1]; // удаляет второй элемент, в [] можно указать номер элемнта в массиве который хотим удалить
arrMass.splice(index, count, elem1...); // удалить count элементов, начиная с index и заменить на элементы elem1
arrMass.slice(begin, end); // копирует часть массива с begin до end не включая
arrMass.sort(fn); // сортировка массива. Если не передать функцию сравнения - сортирует элементы как строки
arrMass.reverse(); // меняет порядок элементов на обрптный
arrMass.concat(item1...); // создаёт новый массив, в который копируется элементы из arr, а также item1...

// Методы перепора (почитать про них подробнее)
arrMass.forEach
arrMass.map
arrMass.every / some
arrMass.filter
arrMass.reduce

let arr = {}; //создание пустого объекта. в него можно пометстить другие объекты, строки, числа и т.д. Записывается в виде ключ: значение через запятую

// у объектов есть методы и свойства
//свойства объектов:
let obj = {
    name: 'John'
};
obj.name = 'john';
//методы оюъектов (действия, функции):
let obg = {
    sayName: function () {
        alert('John');
    }
};


// функции
// Функции нужны, чтобы не повторять один и тот же код во многих местах.
function fun() {

} //создание функции (Function Declaration). Создается до начала выполнения скрипта, можно вызвать перед объявлением

let func = function () {

}; //создание функции (Function Expression). Создается только тогда, когда доходит поток кода, можно выхвать только после объявления

let sterl = () => {

}; //создание стрелочно функции

/*
Без фигурных скобок: (...args) => expression – правая сторона выражение: функция выполняет его и возвращает результат.

С фигурными скобками: (...args) => { body } – скобки позволяют нам писать многострочные инструкции внутри функции, но при этом необходимо указывать директиву return, чтобы вернуть какое-либо значение.
*/

//Условия:
if (условие) {
    действие
} else {
    другое действие
} // создание условия при ктором будет выполнены нужные действия, также после if можно продолжить задавать другие условия с помощью else if и уже потом в конце писать просто else если ни одно условине не выполнилось

switch (условие) {
    case 'проверка':
        действие;
        break;
    case 'проверка':
        действие;
        break;
    case 'проверка':
        действие;
        break;
    default:
        действие;
        break;
} //создание условия при ктором, выполянется определенный кейс если совпадают значения, если ни одно значение не найдено будет выполнен код в default

//Циклы

while (условие) {
    код,
    тело цикла
} // создание цикла

do {
    тело цикла
} while (условие); // создание цикла, который хоть раз выполнится

for (начало; условие; шаг) {
    тело цикла,
    действие
} // создание цикла
// Пример
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
}

//Функциональное выражение, которое не записывается в переменную, называют анонимной функцией.

document.getElementById(); //поиск элемента по id

document.getElementsByTagName(); //получаем псевдомассив элементов по тегу

document.getElementsByClassName(); //получаем псевдомассив с элементами у которых есть данный класс

document.getElementsByClassName()[0]; // получаем первый элемент из псевдомассива

document.querySelectorAll(); // с помощью данной данной команды получаем пседвомассив в котором можно применить метод forEach, а так же в скобочках можно прописать тэг, класс или id, что найти элементы

document.querySelector(); // получаем первый элемент со страници с данным классом, тэгом или id

переменная.style.инлайнсвойство = параметр; // можжно изменить стили или добавить новые

переменная.style.cssText = `прописываем свойства как в css через ;`; //изменяем и добавляем стили (лучше применять данный способ) И использовать лучше `` чтобы можно было прописывать переменные через ${}

псевдомассив.forEach(item => {
    item.style.cssText = `прописываем свойства как в css через ;`;
}); //перебирает элементы в псевдомассиве и применяет стили к ним

const div = document.createElement('нужный тег'); //позволяет создать нужный тег, который можно будет потом вставить на страницу

div.classList.add('название классов'); //добавляет классы к элементу

document.body.append(div); //добавление элемента в конец. вместо body можно написать другой элемент в который мы хотим добавить новый элемент в конец.
document.body.appendChild(div); //старый способ добавление элемента в конец.

document.body.prepend(div); //добавление элемента в начало. вместо body можно написать другой элемент в который мы хотим добавить новый элемент в начало.

элемент.before(div); //добавляет новый элемент перед элементом

элемент.after(div); //добавляет новый элемент после элемента

элементРодитель.insertBefore(div, перед каким элементом вставить); //старый способ добавления элемента

элемент.remove(); //удаление элемента со страницы
элементРодитель.removeChild(элемент который нужно удалить); //старый способ удаления элемента

элемент.replaceWith(другой элемент); // замена одного элемента на другой элемент. другой элемент перемещается
элементРодитель.replaceChild(элемент на который хотим изменить, элемент который хотим заменить); // старый способ замены одного элемента на другой

div.innerHTML = "прописываем нужную HTML структуру например <h1>Hello</h1>"; // добавляем нужную HTML структуру в созданный элемент
div.textContent = "Текст"; // добавляем нужный текст в созданный элемент

div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); //позволяет вставить данные HTML в нутри элемента в начало
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); //позволяет вставить данные HTML после элемента
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); //позволяет вставить данные HTML перед элементом
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); //позволяет вставить данные HTML в нутри элемента в конец


// События или отслеживание событий

const btn = document.querySelector('тэг');
btn.onclick = function () {
    alert('Click');
} //Во время клика на тэг который мы пометстили в переменную btn выполнится функция или какое-то действие (таэке это старый способ) Такой способ лучше не использовать на больших проектах

//addEventListener('название события (их много)', колбэе фкнкция - (event - позволяет получить данные об элементе с которым мы работаем) => {}, также можно добавить третьим аргументом опцию(подробнее здесь https://developer.mozilla.org/ru/docs/Web/API/EventTarget/addEventListener) например {once: true}) - добавление обработчика события. преимущество данного способа это назначение нескольких действий на одно событие
const deleteElem = (e) => {
    e.target.remove();
};
btn.addEventListener('click', (event) => {
    console.log(event);
    alert('Click');
});

btns.forEach(btn => {
    btn.addEventListener('clcik', deleteElem);
}); // добавляет событие на каздую кнопку которую мы получили в псевдомассиве

btn.addEventListener('clcik', deleteElem); //также можно функции прописывать отдельно и писать название после события

btn.removeEventListener('clcik', deleteElem); //удаление обработчика события (используется в условиях когда например что-то уже произошло и обработчик события надо удалить)

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяет стандартное поведение браузера. Прописывается в самое начало обрабртчика событий
});


//получение элементов со страницы

console.log(document.body); //получаем элемент body и всё что внутри него
console.log(document.head); //получаем элемент head и всё что внутри него
console.log(document.documentElement); //получаем элемент html и всё что внутри него

console.log(document.body.childNodes); //получение узлов, которые находятся внутри body. перенос строки тоже считается узлом
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    } //позволяет убрать текстовый узел

    console.log(node);
}
console.log(document.body.firstChild); //получение первого узла внутри body
console.log(document.body.lastChild); //получение последнего узла внутри body

console.log(document.body.firstElementChild); //получение первого элемента внутри body
console.log(document.body.lastElementChild); //получение последнего элемента внутри body

console.log(document.querySelector('#current').parentNode); // получение родительского узла относительного элемента, ктоторый прописан перед parentNode

console.log(document.querySelector('#current').parentElement); // получение родительского элемента относительного элемента, ктоторый прописан перед parentNode

console.log(document.querySelector('#current').nextSibling); //Получение следующего узла относительно элемента, который прописан перед nextSibling (сосед снизу)
console.log(document.querySelector('#current').previousSibling); //Получение предыдущий узла относительно элемента, который прописан перед nextSibling (сосед сверху)

console.log(document.querySelector('#current').nextElementSibling); //Получение следующего элемента относительно элемента, который прописан перед nextSibling (сосед снизу)
console.log(document.querySelector('#current').previousElementSibling); //Получение предыдущий элемента относительно элемента, который прописан перед nextSibling (сосед сверху)

// в HTML к тегам можно добавлять data атрибуты. Например data-любое слово которое ассоциируется с данным элементом
console.log(document.querySelector('[data-current="3"]')); //пример получения data атрибута

document.addEventListener('DOMContentLoaded', () => {}); //всегда добавлять в начале и писать внутри неё весь код. Данная строка кода дожидается отрисовки DOM структура(дерева) и только тогда когд js начнёт выполняться


/* classList */

// примеры
const btns = document.querySelectorAll('button');

btns.classList; // возвращает псевдомассив, содержащий все классы элемента.  указывает на HTML элемент на котором сработало событие.
btns[0].classList.length; // узнаём сколько классов у элемента
btns[0].classList.item(сюда пишем индекс); // позволяет узнать класс под определенным индексом
btns[0].classList.add('название класса', 'название класса'); // позволяет добавить класс к элементу
btns[0].classList.remove('название класса', 'название класса'); // удаляет класс у элемента
btns[0].classList.toggle('название класса'); // если у элемента нет класса то он его добавит, а если есть то удалит. используется часто с событием click
btns[0].classList.contains('название класса'); //позволяет узнать если ли у элемента такой класс. выводит boolean значение. Используется часто в условиях
if (btns[1].classList.contains('название класса')) {
    console.log('red');
} // например если есть такой класс у элемента то выполняется какое-нибудь действие на странице

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red'); // в сложных скриптах используется не всегда
}); //если у элемента нет класса то при клике на него он добавиться, если такой класс есть то удалится

btns[0].className; // показывает в строчку какие классы есть у элемента. Не использовать в работе.

/* ДЕЛЕГИРОВАНИЕ СОБЫТИЙ */

//обработчик события назначаем родителю, а внутри пороверяем на что кликнули. функцию назначаем для его потомков если они подходят под определенные параметры

const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('btn-block');

wrapper.addEventListener('click', (event) => {
    if (event.target && evant.target.classList.contains('red')) {
        console.log('red');
    } // event.target прописываем всегда чтобы скрипт выполнялся всегда и не выдавал ошибку. Можно проверять не только класс
});
wrapper.addEventListener('click', (event) => {
    if (event.target && evant.target.matches('button.red')) {
        console.log('hello go');
    } // evant.target.matches('button.red') - проверяем что элемент button с классом red совпадает с тем, что нам нужно чтобы выполнить скрипт
});


/* АСИНХРОННОСТЬ */

const timeout = setTimeout(() => {
    console.log('After timeout')
}, 2500) // принимает 2 параметра: функцию и через какое время в милисикундах будет выполнена.
const timeout = setTimeout((text) => {
    console.log(text)
}, 2500, 'Hello') // Елси функция принимает какие-то переменные то их можно будет прописать через запятую после назначения времени

clearTimeout(timeout) // очищает таймаут если не хотим чтобы он выполнялся

const interval = setInterval(() => {
    console.log('After timeout')
}, 2500) // принимает 2 параметра: функцию и через какое время в милисикундах будет повторятся выполнение функции. часто используется для анимации

clearInterval(interval) // останавливает и очищает интервал если не хотим чтобы он выполнялся

/* ДАТА */

const now = new Date();
console.log(now); // показывает какое сейчас время и какая сейчас дата

const now = new Date('2020-05-01'); // позволяет передать нужную дату в строчку и получить её, но время будет 00:00:00.000

const now = new Date(2020, 5, 1, 20); // токой записью позволяет передать нужную дату (год, месяц, число) и время (часы, минуты, секунды, милимекунды) в строчку и получить её
// месяцы считаются с 0 до 11
// дни считаются с 0 до 6, где 0 это воскресенье

const now = new Date(0); // также можно передавать количество миллисекунд. отсчёт начинается с 1 января 1970 года полночь. 0 - выдаёт 1 января 1970 год. чтобы получить год который позже 1970, то надо ввести отрицательное значение

// Часто используемые методы доты

now.getFullYear(); // позволяет получить год
now.getMonth(); // позволяет получить месяц
now.getDate(); // позволяет получить день
now.getHours(); // позволяет получить часы
now.getMinutes(); // позволяет получить минуты
now.getSeconds(); // позволяет получить секунды
now.getMilliseconds(); // позволяет получить милисекунды
now.getDay(); // позволяет получить день недели
// данные методы также можно записать например getUTCHours, и получить время часового пояса +0

now.getTimezoneOffset(); // позволяет получить разницк между часовым поясом, который на компе и UTC+0 поясом. разница будет в минутах

now.getTime(); // позволяет получить число милисекунд, которое прошло с 1 января 1970 года.

//Чтобы изменить дату в методах выше кроме getTimezoneOffset, надо вместо get написать set
now.setHours(40); // проиходит автоисправление, если введено больше стандарта

// небольшой пример, который покажет сколько милисекунд выполняется цикл
let start = new Date(); // помещаем текущее время

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; // возводим в 3 степень
}

let end = new Date(); // помещаем следующее текущее время после цикла

console.log(`Время выполнения цикла равно ${end - start} миллисекунд`);

Date.parse(переменная или дата); // разбирает строковое представление даты и возвращает количество миллисекунд прошедших с 1 января 1970 года 00:00:00 по UTC.