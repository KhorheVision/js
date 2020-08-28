function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    /* ТАБЫ Start*/
    const tabs = document.querySelectorAll(tabsSelector);
    const tabsContent = document.querySelectorAll(tabsContentSelector);
    const tabsParent = document.querySelector(tabsParentSelector);

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
            item.classList.remove(activeClass);
        });
    } // для начала скрываем весь контент. + удаляем класс активности у таба

    function showTabContent(i = 0) {
        tabsContent[i].style.display = "block"; // чаще используют не этот метод, а добавляют специально созданные классы

        /*
            ПРИМЕР
            item.classList.add('show'); - добавляем класс и показываем элемент
            item.classList.remove('hide'); - удаляем класс чтобы можно было показать элемент
            */

        tabs[i].classList.add(activeClass);
    } // i - это номер элемента в псевдомассиве который мы получили. Показываем по умолчанию 1 элемент с контентом + к первому табу добовляем класс активности.

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener("click", (event) => {
        const target = event.target; // отлавливает где был клик

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            }); //item - каждый таб, i - номер таба в псевдомассиве. Если тот элемент в который мы кликнули будет совпадать с элементом который мы перебераем и это один и тотже элемент то мы вызываем 2 функции, которые написали ранее. и в showTabContent(i) мы передаём i - тоесть номер таба который совпал
        }
    });
}

export default tabs;