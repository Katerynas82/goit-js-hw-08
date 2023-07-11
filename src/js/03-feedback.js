import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('.feedback-form input');
const feedbackMessage = document.querySelector('.feedback-form textarea');

form.addEventListener('input', onInput);
form.addEventListener('submit', throttle(throttledSubmit, 500));

function onInput(evt) {
  const formData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};

  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

const clearForm = function () {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  form.reset();
};

function populateFormFields() {
  const savedFormData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (savedFormData) {
    inputEmail.value = savedFormData.email || '';
    feedbackMessage.value = savedFormData.message || '';
  }
}

function throttledSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  populateFormFields();
  clearForm();
}

populateFormFields();
