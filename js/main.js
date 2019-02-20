// menu buttons
let foodButton = document.querySelector('#foodButton');
let drinksButton = document.querySelector('#drinksButton');
let locationButton = document.querySelector('#locationButton');
let contactButton = document.querySelector('#contactButton');

let foodCloseButton = document.querySelector('#foodCloseButton');
let drinksCloseButton = document.querySelector('#drinksCloseButton');
let locationCloseButton = document.querySelector('#locationCloseButton');
let contactCloseButton = document.querySelector('#contactCloseButton');
let modal;

// modals
let foodModal = document.querySelector('#foodModal');
let drinksModal = document.querySelector('#drinksModal');
let locationModal = document.querySelector('#locationModal');
let contactModal = document.querySelector('#contactModal');

// open modals
function openModal(e) {
  modal = `${e.target.id.slice(0, -6)}Modal`;
  modal = document.querySelector(`#${modal}`);
  console.log(modal);
  modal.style.display = 'block';
}

// close modals
function closeModal(e) {
  console.log('clicked');
  console.log(modal);
  modal.style.display = 'none';
}

// open modals event listeners
foodButton.addEventListener('click', openModal);
drinksButton.addEventListener('click', openModal);
locationButton.addEventListener('click', openModal);
contactButton.addEventListener('click', openModal);

// close modals event listeners
foodCloseButton.addEventListener('click', closeModal);
drinksCloseButton.addEventListener('click', closeModal);
locationCloseButton.addEventListener('click', closeModal);
contactCloseButton.addEventListener('click', closeModal);
