import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');

const feedbackForm = {
    email: '',
    message: '',
};

form.addEventListener('input', throttle(onInputForm, 500));

function onInputForm(e){
    feedbackForm[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(feedbackForm);
}

function updateInput(){
    const savedInput = localStorage.getItem('feedback-form-state');
    const parsedInput = JSON.parse(savedInput);
    if(savedInput){
        console.log(parsedInput);
        emailInput.value = parsedInput.email;
        messageTextarea.value = parsedInput.message;
    }
};

updateInput();

