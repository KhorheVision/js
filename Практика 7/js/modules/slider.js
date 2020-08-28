function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    correntCounter,
    wrapper,
    field
}) {
    /* Слайдер 1 версия Start*/
    // const slides = document.querySelectorAll('.offer__slide');
    // const prev = document.querySelector('.offer__slider-prev');
    // const next = document.querySelector('.offer__slider-next');
    // const total = document.querySelector('#total');
    // const current = document.querySelector('#current');
    // let slideIndex = 1;

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }

    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => {
    //         item.style.display = 'none';
    //     });

    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => {
    //     plusSlides(1);
    // });
    /* Слайдер 1 версия End*/

    /* Слайдер 2 версия Start*/
    const slides = document.querySelectorAll(slide);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const total = document.querySelector(totalCounter);
    const current = document.querySelector(correntCounter);
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    const width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1;
    let offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    function deleteNotDigits(str) {
        return +str.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        // if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
        //     offset = 0;
        // } else {
        //     offset += +width.slice(0, width.length - 2);
        // } // можно использовать slice() с помощью которого мы отсекаем 2 последних символа, чтобы получить число

        // if (offset === +width.replace(/\D/g, '') * (slides.length - 1)) {
        //     offset = 0;
        // } else {
        //     offset += +width.replace(/\D/g, ''); //позволяет отсечь от цифр не нужные символы, чтобы получить число с которым можно дальше работать
        // }

        if (offset === deleteNotDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        } // также можно использовать отдельно написаную функцию

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        //точки
        dots.forEach(dot => {
            dot.style.opacity = '0.5';
        });
        dots[slideIndex - 1].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset === 0) {
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex === 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        //точки
        dots.forEach(dot => {
            dot.style.opacity = '0.5';
        });
        dots[slideIndex - 1].style.opacity = 1;
    });

    /* Слайдер 2 версия End*/

    /* Слайдер точка(навигация) Start*/
    const slider = document.querySelector(container);
    const dots = [];

    slider.style.position = 'relative';

    const indicators = document.createElement('ol');
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i === 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }
    // дальше точки в функции next и prev


    //клики по точкам
    dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
            const slideTo = event.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

            dots.forEach(dot => {
                dot.style.opacity = '0.5';
            });
            dots[slideIndex - 1].style.opacity = 1;
        });
    });
    /* Слайдер точка(навигация) End*/
}

export default slider;