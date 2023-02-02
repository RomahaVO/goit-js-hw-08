import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');

const feedbackForm = {
    email: '',
    message: '',
};



form.addEventListener('input',throttle(onInputForm, 500));
form.addEventListener('textarea', () => { 
    feedbackForm[e.target.name] = messageTextarea.value;}
);


function onInputForm(e){
    feedbackForm[e.target.name] = e.target.value;
    console.log(feedbackForm[e.target.name])
    // messageTextarea.value = feedbackForm.email;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));

};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(feedbackForm);
    localStorage.clear();
}

function updateInput(){
    const savedInput = localStorage.getItem('feedback-form-state', feedbackForm);
    const parsedInput = JSON.parse(savedInput);
    if(savedInput){
        console.log(parsedInput); 
        emailInput.value  = parsedInput.email;
        messageTextarea.value = parsedInput.message;

    }
        feedbackForm.email = emailInput.value;
        feedbackForm.message = messageTextarea.value;
};
console.log(feedbackForm)
updateInput();

// function createData() {
//     const expenseObj = {};
//     expenseObj.name = expenseName.value;
//     expenseObj.date = expenseDate.value;
//     expenseObj.amount = expenseAmount.amount;
//     return expenseObj;
// }


// const throttle = require("lodash.throttle");

// const refs = {
//   form: document.querySelector('.feedback-form'),
// };

// const LOCALSTORAGE_KEY = 'feedback-form-state';

// refs.form.addEventListener('input',throttle(onInputForm,500));
// refs.form.addEventListener('submit', onSubmitForm);
// window.addEventListener('load', updateOutputOnload);

// function onInputForm(e) {
//   e.preventDefault();
//   const message = refs.form.elements.message.value;
//   const email = refs.form.elements.email.value;
//   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ message, email }));
  
// }

// function updateOutputOnload(e) {
//   e.preventDefault();
//   const outputTextContent = localStorage.getItem(LOCALSTORAGE_KEY);
//   const outputObjectContent = JSON.parse(outputTextContent)||{email:"", message:""};
//   const { email, message } = outputObjectContent;
//   refs.form.elements.email.value = email;
//   refs.form.elements.message.value = message;
// }

// function onSubmitForm(e) {
//   e.preventDefault();
//   const {nelements: { email, message },} = e.currentTarget;
//   console.log({email:email.value, message:message.value})
// //   localStorage.clear();
// //   refs.form.reset();
// }