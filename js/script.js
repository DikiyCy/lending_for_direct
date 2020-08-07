'use strict';

const more = document.querySelectorAll('.item__more'),
    modal = document.querySelectorAll('.item__modal'),
    closeModal = document.querySelectorAll('.modal__close'),
    submit = document.querySelector('.request__submit');

window.addEventListener('DOMContentLoaded', () => {
    more.forEach((link, index) => {
        link.addEventListener('click', () => {
            modal[index].classList.toggle('hidden');
        });
    });

    closeModal.forEach((close, index) => {
        close.addEventListener('click', () => {
            modal[index].classList.add('hidden');
        });
    });

    submit.addEventListener('click', (event) => {
        event.preventDefault();
    });
});
