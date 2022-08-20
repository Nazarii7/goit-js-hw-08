import throttle from 'lodash.throttle';
const FORM_KEY = 'feedback-form-state';
const forM = document.querySelector('.feedback-form');
const inputName = document.querySelector('.feedback-form input');
const textareaMessage = document.querySelector('.feedback-form textarea');

addSavedData();

forM.addEventListener('submit', throttle(onFormSubmit, 500));
inputName.addEventListener('input', throttle(onInput, 500));
textareaMessage.addEventListener('input', throttle(onInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  const currentData = localStorage.getItem(FORM_KEY);
  const parsedData = JSON.parse(currentData);

  console.log(parsedData);
  console.log(`User e-mail: ${parsedData.name}`);
  console.log(`User comment: ${parsedData.message}`);

  event.target.reset();
  localStorage.removeItem(FORM_KEY);
}
function onInput() {
  const data = {
    name: inputName.value,
    message: textareaMessage.value,
  };

  localStorage.setItem(FORM_KEY, JSON.stringify(data));
  console.log(data);
}

function addSavedData() {
  const savedText = localStorage.getItem(FORM_KEY);
  const parsedText = JSON.parse(savedText);
  console.log(parsedText);

  if (parsedText) {
    inputName.value = parsedText.name;
  }

  if (parsedText) {
    textareaMessage.value = parsedText.message;
  }
}
