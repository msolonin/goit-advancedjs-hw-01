const feedbackFormEl = document.querySelector('.js-feedback-form');
let formData = {};

const fillFormFields = form => {
  const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));

  if (formDataFromLS !== null) {
      formData = formDataFromLS;

  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      form.elements[key].value = formDataFromLS[key];
    }
  }
  }
};

fillFormFields(feedbackFormEl);

const onFormFieldChange = event => {
  // const {
  //   target: { value: fieldValue },
  // } = event;

  const fieldName = event.target.name;
  const fieldValue = event.target.value;

  formData[fieldName] = fieldValue;

  localStorage.setItem('feedback-form-data', JSON.stringify(formData));
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();
  const userEmailValue = document.querySelector('input[name="user_email"]').value;
  const userMessageValue = document.querySelector('textarea[name="user_message"]').value;
  if (userEmailValue === '' || userMessageValue === '') {
      alert('Fill please all fields');
      return;
  }
  event.target.reset();
  localStorage.removeItem('feedback-form-data');
};

feedbackFormEl.addEventListener('input', onFormFieldChange);
feedbackFormEl.addEventListener('submit', onFeedbackFormSubmit);
