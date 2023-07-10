import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';

const ref = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const formData = {};

ref.form.addEventListener('input', evt => {
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));

  console.log(evt.target.name);
  console.log(evt.target.value);
});

// Не розумію, чому ця функція не працює...

function populateFormFields() {
  const savedFormData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (savedFormData) {
    ref.input.value = savedFormData.input || '';
    ref.textarea.value = savedFormData.textarea || '';
  }
}

const clearForm = function () {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  ref.form.reset();
};

function throttledSubmit(evt) {
  evt.preventDefault();
  clearForm();
  populateFormFields();
}

ref.form.addEventListener('submit', throttle(throttledSubmit, 500));
