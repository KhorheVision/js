function timer(id, deadline) {
    /* Таймер Start*/

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

    setClock(id, deadline);
    /* Таймер End*/
}

export default timer;