' use strict '; // всегда прописывать перед тем как ничинаешь писать код.

/* ПЕРЕМЕННЫЕ */

var назваинеПеременной = 'значение'; //старый способ создания переменной

// Название переменной пишется с маленокой буквы и если в ней два слова то записывается в виде camelCase, то есть каждое новое слово пишется с большой буквы слитно. Также название переменной нельзя задавать зарезервированные имена. Название переменной нельзя начинать с числа, но можно начать например с символов $, _

let назваинеПеременной = 'значение'; //современный способ создания переменной
const назваинеПеременной = 'значение'; //позволяет создать константную переменную, которую нельзя изменить. Также если константа известна до выполнения кода то название записывается большими буквами и через нижнее подчёркивание.

// Для создания переменных предпочтительнее использовать const, если мы знаем, что значение переменной не будет меняться

//Конкатена́ция — операция склеивания объектов линейной структуры, обычно строк.

alert('текст'); //позволяет вывести на экране всплывающее окно с текстом
prompt('например написать вопрос', 'значение по умолчанию. в основном оставляют пустым'); // позволяет в сплывающем окне спросить вопрос и получить ответ в виде строки.

/* ОПЕРАТОРЫ */

let a = 5;
const b = 3;
let c = 10;

// базовые операторы
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Инкремент и Декремент (увеличение или уменьшение на 1)
console.log(a++); // в начале выводит старое число и потом уже прибавляет 1
console.log(++a); // сразу выводит число с плюс 1
console.log(a--); // в начале выводит старое число и потом уже отбовляет 1
console.log(--a); // сразу выводит число с минус 1

c = c + a;
c = c - a;
c = c * a;
c = c / a;
// Сокращенная запись выражений, которые написаны выше
c += a;
c -= a;
c *= a;
c /= a;

/* ТИПЫ ДАННЫХ */

const isProgrammer = true;
const name = 'Egor';
const age = 25;

// typeof выводит какой тип данных содержит переменная или написанное выыражение
console.log(typeof isProgrammer);
console.log(typeof name);
console.log(typeof age);

// Есть пять основных типов данных: string, number, boolean, null, undefined

/* ПРИОРИТЕТ ОПЕРАТОРОВ */

// Ссылка на таблицу приоритет операторов
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

/* УСЛОВНЫЕ ОПЕРАТОРЫ */

if (условие) {
    действие
} else {
    другое действие
} // создание условия при ктором будет выполнены нужные действия, также после if можно продолжить задавать другие условия с помощью else if и уже потом в конце писать просто else если ни одно условине не выполнилось
// Пример
const courseStatus = 'pending';
if (courseStatus === 'ready') {
    console.log('курс готов');
} else if (courseStatus === 'pending') {
    console.log('курс в разработке');
} else {
    console.log('курс не готов');
}

//Тернарное выражение
(условие) ? console.log('если true то выполняется это выражение или код который написан до двоеточия (т.е. вместо console.log)'): console.log('если false то выполняется это выражение или код который написан (т.е. вместо console.log)')

/* БУЛЕВАЯ ЛОГИКА */

//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// null, undefinde, 0, '', NaN - это false, всё остальное это true

// &&(и) - если хоть одно лож то возврашает ложь. Если всё истино то возвращает последнее истино
// ||(или) - если хоть одна истина то возврашает истина. Если всё ложь возвращает последнюю ложь.

/* ФУНКЦИИ */

// Функции нужны, чтобы не повторять один и тот же код во многих местах.

function fun('сюда можно писать переменные через запятую которые будут использоваться в функции и при вызове функции можно передать другие переменные, чтобы например получилось другое значение') {

} //создание функции (Function Declaration). Создается до начала выполнения скрипта, можно вызвать перед объявлением

let func = function ('сюда можно писать переменные через запятую которые будут использоваться в функции и при вызове функции можно передать другие переменные, чтобы например получилось другое значение') {

}; //создание функции (Function Expression). Создается только тогда, когда доходит поток кода, можно выхвать только после объявления

// анонимные функции - это функции которые не имеют названия

let sterl = ('сюда можно писать переменные через запятую которые будут использоваться в функции и при вызове функции можно передать другие переменные, чтобы например получилось другое значение') => {

}; //создание стрелочно функции


// Без фигурных скобок: (...args) => expression – правая сторона выражение: функция выполняет его и возвращает результат.

// С фигурными скобками: (...args) => { body } – скобки позволяют нам писать многострочные инструкции внутри функции, но при этом необходимо указывать директиву return, чтобы вернуть какое-либо значение.

function sumAll(...all) {
    let result = 0;
    for (let num of all) {
        result += num;
    }
    return result;
} // ...all позволяет принимать неограниченное число переменных и на выходе получается массив с которым можно работать в функции

/* ЗАМЫКАНИЯ */
// замакания это когда из одной функции возвращаем другую функцию и дальше происходят сохранение некого контекста
//небольшой пример
function createMember(name) {
    return function (lastName) {
        console.log(name + lastName);
    };
}
// чтобы функции сработали надо сделать следующее
const logWithLastName = createMember('Egor'); // в начале передаем занчение name
console.log(logWithLastName); // Покажет функцию внутри
console.log(logWithLastName('Zhidkov')); // а потом задаем значение lastName, чтобы функция внутри сработала и выдала результат

/* МАССИВЫ */

let mass = []; // создание пустого массива и в него можно поместить объекты, строки, числа и т.д. через запятую. Отсчёт начинается с индекс 0
let mass = new Array(); //таже создание пустного массива в который можно поместить данные через запятую. Но лучше использовать 1 метод

console.log(mass.length); //позволяет узнать длину массива. т.е. сколько элементов в массиве
mass[индекс массива] = 'новое значение'; // так можно редактировать элементы массива и задавать им новые значения
mass[mass.length] = 'значение'; //позволяет добавить новый элемент в конец массива

//массивы не равны друг други даже если у них одинаковые значения внутри

//некоторые Методы массивов
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
arrMass.reverse(); // меняет порядок элементов на обратный
arrMass.concat(item1...); // создаёт новый массив, в который копируется элементы из arr, а также item1...

arrMass.indexOf('значение в массиве'); // позволяет посмотреть индекс значения в массиве
const indexNum = arrMass.indexOf('значение в массиве'); // помещаем индекс значения в переменную
arrMass[index] = 'другое значение'; // таким образом можно изменить значение, которое находится на этом индексе в массиве

const people = [{
        name: 'Vladilen',
        budget: 4200
    },
    {
        name: 'Elena',
        budget: 3500
    },
    {
        name: 'Victoria',
        budget: 1700
    }
];
people.findIndex(функция); // своего рода цикл. возвращает индекс в массиве, если элемент удовлетворяет условию проверяющей функции. В противном случае возвращается -1.
people.find(); // возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции.  В противном случае возвращается undefined.
const index = people.findIndex(function (person) {
    return person.budget === 3500
})

const person = people.find(function (person) {
    return person.budget === 3500
})
const person = people.find(person => person.budget === 3500) //тоже самое, что написано выше, только более ёмко

let findedPerson
for (const person of people) {
    if (person.budget === 3500) {
        findedPerson = person
    }
} //также можно использовать for of чтобы найти нужное значение

arrMass.includes('значение в массиве'); // позволяет проверить есть ли такое значение в массиве. Ищщдуфт

arrMass.map(функция); //создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
const upperCaseCars = cars.map(car => {
    return car.toUpperCase()
})

arrMass.filter(функция); //создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
const filteredNumbers = pow2Fib.filter(num => num > 20); // новый массив в котором числа больше 20

arrMass.reduce(функция, некое начальное занчение)
const allBudget = people
    .filter(person => person.budget > 2000) // фильтруем массив и получаем значения бюджета который больше 2000
    .reduce((acc, person) => {
        acc += person.budget
        return acc
    }, 0) //применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

/* ЦИКЛЫ */

while (условие) {
    код,
    тело цикла
} // создание цикла

do {
    тело цикла
} while (условие); // создание цикла, который хоть раз выполнится

for (начало - создаем переменную через
    let; условие - до какого момента крутить цикл; шаг - в основном пишется i++) {
    тело цикла,
    действие
} // создание цикла. Чаще используется данный метод
// Пример
for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
}

for (let item of massiv) {
    код который выполняется для каждого item в переменной
}; // из интеренета: Оператор for...of выполняет цикл обхода итерируемых объектов (включая Array, Map, Set, объект аргументов и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных свойств объекта.

/* ОБЪЕКТЫ */

let arr = {}; //создание пустого объекта. в него можно пометстить другие объекты, строки, числа и т.д. (т.е. любые типы данных). Записывается в виде ключ: значение через запятую

let arr = new Object({}); //создание объекта. данная запись используется редко

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

obj.name = 'egor'; // позволяет изменить значение ключа
obj.age = 25; // позволяет добавить в объект новые ключ: знаяение

console.log(obj.name); // обращение к ключу и получение его значения
console.log(obj['name']); // другой способ обращения

delete obj['name']; // удаление ключа из объекта

const {
    name,
    age,
    language
} = obj; // вытаскиваем занчения ключей из объекта в новые переменные и создаем переменные с названием ключей объекта.
const {
    name,
    age: ageHuman = 19,
    language
} = obj; // через двоеточие мы можем задать другое название переменной. также можно задавать занчение по умолчанию.

for (let key in obj) {
    console.log('key:', key)
    console.log('value:', person[key])
} // позволяет перебрать объект по 1 ключу и выполнит с ними какие либо действия. напирмер получить назвине ключей и их значений. Так писать не безопасно так как может залесть в proto

for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log('key:', key)
        console.log('value:', obj[key])
    }
} // так записывать более правильно и безопасно. hasOwnProperty есть у самого объекта, а не в прототипе

Object.keys(obj); // получаем массив с ключами объекта. не бежит по прототипу и из-за это не надо писать проверку

/* NUMBER */

const age = 42; //чило записывается без кавычек
// integer - целые числа
// float - числа с точкой (дробные)

console.log(Number.MAX_SAFE_INTEGER); //показывает максимальное значение integer которое доступно в JavaScript с которым можно проводить каки-либо операции
console.log(Number.MIN_SAFE_INTEGER); //показывает минимальное значение integer которое доступно в JavaScript с которым можно проводить каки-либо операции
console.log(Math.pow(2, 53)); // возводим 2 в 53 степень

// в JS есть положиетльная и отрицательная бесконечнойть (Infinity, -Infinity)
// NaN (Not a Number) - говорит о том, что выражение или что-то другое не является числом
// isNan() - позволяет проверить переменную или что-то другое на NaN
// Чтобы привести строку в число надо поставить перед строкой знак +

console.log(Number.isFinite(42)); // проверяет является ли число конечным
console.log(parseInt()); // переводит в число. (целое число. дробное число обрезает до целого) Часто используют это, чтобы перевести в число
console.log(parseFloat()); // переводит в число. (дробное число)
console.log((0.4 + 0.2).toFixed(число)); // Позволяет задать дробному числу максимальное количество знаков после точки

/* BIG INT */

// Позволяет работать с большими целочисленними числами.
// всегда возле числа есть буква n (2n, 1654565464n и т.д.)
// BigInt() - позволяет число перевести в BigInt
// Big Int числа могут складиваться, вычитаться и т.д. только между собой, т.е. с другими типами у них  появляется ошибка
console.log(10n + 4); // error

/* MATH */

console.log(Math.E); // получение числа экспоненты
console.log(Math.PI); // получение числа ПИ
console.log(Math.sqrt(число)); // корень из числа
console.log(Math.pow(2, 53)); // возводим 2 в 53 степень
console.log(Math.abs(число)); // модуль числа
console.log(Math.max(числа через запятую)); // выводит максимальное число из перечисденных
console.log(Math.min(числа через запятую)); // выводит минимальное число из перечисденных
console.log(Math.floor(число)); // округляет число в меньшую сторону
console.log(Math.ceil(число)); // округляет число в большую сторону
console.log(Math.round(число)); // округляет число как обычно в матиматике
console.log(Math.trunc(число)); // отсекает числа после точки
console.log(Math.random()); // выдаёт рандомное цисло от 0 до 1

//Пример
function getRandomBetwen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
} // функция которая позволяет выбрать рандомное число из задоного диапазона min и max

/* STRING */

// Строки записываются '' "" и ``(в данные ковычки можно записывать переменные с помощью записи ${переменная} и все отступы сохраняются)

const name = 'Егор';
const age = 25;

const output = 'Привет ' + name + ' вам исполнилось ' + age; // так записывают редко из-за того что можно легко запутаться
const output = `Привет ${name} вам исполнилось ${age}`; // так записывают часто и это более удобный способ

console.log(name.length); // позволяет узнать сколько символов в строке
console.log(name.toUpperCase()); // позволяет перевести все символы в верхний регистр
console.log(name.toLowerCase()); // позволяет перевести все символы в нижний регистр
console.log(name.charAt(2)); // позволяет понять какой символ находится на донной позиции
console.log(name.indexOf('!')); // вернёт индекс первого символа указаного занчения. если ничего не найдено то вернёт -1
console.log(name.toLowerCase().startsWith('влад')); // проверяет начинается ли строка с данного занчения. регистер важен. но можно использовать toUpperCase() или toLowerCase(). резальтат boolean
console.log(name.startsWith('Влад')); // проверяет начинается ли строка с данного занчения. езальтат boolean
console.log(name.endsWith('ен!')); // проверяет заканчивается ли строка с данного занчения. езальтат boolean
console.log(name.repeat(3)); // сколько раз повторять текст
const string = '     password      '
console.log(string.trim()); // убирает пробелы справа и слева
console.log(string.trimLeft()); // убирает пробелы слева
console.log(string.trimRight()); // убирает пробелы справа

/* АСИНХРОННОСТЬ */

//Event Loop

// примеры асинхронности. Таймауты и интервалы

const timeout = setTimeout(() => {
    console.log('After timeout')
}, 2500) // принимает 2 параметра: функцию и через какое время в милисикундах будет выполняться

clearTimeout(timeout) // очищает таймаут если не хотим чтобы он выполнялся

const interval = setInterval(() => {
    console.log('After timeout')
}, 2500) // принимает 2 параметра: функцию и через какое время в милисикундах будет повторятся выполнение функции

clearInterval(interval) // останавливает и очищает интервал если не хотим чтобы он выполнялся

/* ПРОМИСЫ */

/* РАБОТА С DOM */

ocument.getElementById(); //поиск элемента по id

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
div.textContent; // получение текста из элемента

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