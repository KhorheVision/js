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

const getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) { // например что-то посло не так, то выкидываем ошибку
        throw new Error(`Could not fetch ${url}, status ${res.status}`); // позволяет выкинуть новую ошибку, которую конструируем руками. Выведет статус ошибки и по какому url
    }

    return await res.json();
}; // делаем запрос, ожидаем его окончания и преобразуем в обычный объект

export {
    postData
};
export {
    getResource
};