function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    if (modalTimerId) {
        clearTimeout(modalTimerId);
    }
}

function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.style.display = "none";
    document.body.style.overflow = "";
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    /* Модальное окно Start*/
    const modal = document.querySelector(modalSelector);
    const modalOpen = document.querySelectorAll(triggerSelector);

    modalOpen.forEach((item) => {
        item.addEventListener("click", () => openModal(modalSelector, modalTimerId)); // выполняет коллбэк функцию и внутри выполняется openModal
    });

    modal.addEventListener("click", (event) => {
        if (
            event.target === modal ||
            event.target.getAttribute("data-close") == ""
        ) {
            closeModal(modalSelector);
        }
    }); //данное собитие выполнится даже в новосозданном элементе

    document.addEventListener("keydown", (event) => {
        if (event.code === "Escape" && modal.style.display === "block") {
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight
        ) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener("scroll", showModalByScroll); // позволяет сделать так чтобы действие при скролле выполнилось один раз и удалилось
        }
    }

    window.addEventListener("scroll", showModalByScroll);
    /* Модальное окно End*/
}

export default modal;
export {
    closeModal
};
export {
    openModal
};