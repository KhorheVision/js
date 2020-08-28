import {
    closeModal,
    openModal
} from './modal';
import {
    postData
} from '../services/services';

function forms(formSelector, modalTimerId) {
    /* Использование AJAX и XMLHttpRequest для отправки формы Start*/
    const forms = document.querySelectorAll(formSelector);

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
        openModal('.modal', modalTimerId);

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
            closeModal('.modal');
        }, 4000); // через 4 секунды будем убирать thanksModal, чтобы обратно отобразить форму. также закрываем модальное окно
    } // функция которая добавит красоты после отправки формы
    /* Использование AJAX и XMLHttpRequest для отправки формы End*/
}

export default forms;