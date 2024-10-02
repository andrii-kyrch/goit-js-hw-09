const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
  const value = localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

form.addEventListener('input', () => {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value.trim();
  saveToLS('feedback-form-state', formData);
});

window.addEventListener('DOMContentLoaded', () => {
  const data = loadFromLS('feedback-form-state');
  form.elements.email.value = data?.email || '';
  form.elements.message.value = data?.message || '';
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
});

form.addEventListener('submit', event => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  }
});
