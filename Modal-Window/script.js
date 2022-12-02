'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')
console.log(btnsOpenModal);

function openModal() {
    console.log('Button clicked');
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

function closeModal() {
    console.log('Close button clicked');
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let x = 0; x < btnsOpenModal.length; x++) {
    btnsOpenModal[x].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

//keyboard events
document.addEventListener('keydown', function(event) {
    console.log(event.key, 'is pressed');

    if(event.key === 'Escape') {
        if(!modal.classList.contains('hidden')) {
            closeModal()
        }
    }
})