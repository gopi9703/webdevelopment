var Init = function () {
  const showQuestion = document.querySelector('#addBtn');
  const formCard = document.querySelector('.card-form');
  const closeForm = document.querySelector('.close-btn');
  const form = document.querySelector('#question-form');
  const questionInput = document.querySelector('#question-input');
  const answerInput = document.querySelector('#answer-input');
  const feedback = document.querySelector('.feedback');
  const cardList = document.getElementById('questions-list');

  let id;
  let ui = new Question();
  let data = ui.getFromLocalStorage();
  if (data.length > 0) {
    id = data[data.length - 1].id + 1;
  } else {
    id = 1;
  }
  console.log(data);
  data.forEach(function (item) {
    console.log(item);
    ui.addQuestion(cardList, item);
  });
  //show form on Add button
  showQuestion.addEventListener('click', function () {
    ui.showForm(formCard);
  });

  //hide form on close button
  closeForm.addEventListener('click', function () {
    ui.hideForm(formCard);
  });

  // Form submit
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const questionValue = questionInput.value;
    const answerValue = answerInput.value;

    if (questionValue === '' || answerValue === '') {
      feedback.classList.add('showItem', 'alert-danger');
      feedback.textContent = 'fields cannot be empty';
      setTimeout(function () {
        feedback.classList.remove('alert-danger', 'showItem');
      }, 3000);
    } else {
      const question = new Question(id, questionValue, answerValue);
      id++;
      data.push(question);
      ui.addToLocalStorage(data);
      ui.addQuestion(cardList, question);
      ui.clearFields(questionValue, answerValue);
    }
  });
};

//Constructor function responsible for each card
function Question(id, title, answer) {
  this.id = id;
  this.title = title;
  this.answer = answer;
}

Question.prototype.showForm = function (element) {
  element.classList.add('showForm');
};

// store saved questions in local storage
Question.prototype.addToLocalStorage = function (data) {
  localStorage.clear();
  const dataJson = JSON.stringify(data);
  localStorage.setItem('cardQuestionsData', dataJson);
};

// render saved questions on load from localstroage
Question.prototype.getFromLocalStorage = function () {
  let savedData = localStorage.getItem('cardQuestionsData');
  if (savedData) {
    const savedDataParsed = JSON.parse(savedData);
    return savedDataParsed;
  } else {
    return (savedData = []);
  }
};

// render question
Question.prototype.addQuestion = function (element, question) {
  const div = document.createElement('div');
  div.classList.add('col-md-4');
  div.innerHTML = `<div class="card card-body flashcard my-3">
          <h4 class="text-capitalize">${question.title}</h4>
          <h5 class="answer mb-3">${question.answer}</h5>
          <div class="flashcard-btn d-flex justify-content-end">
     
           <a href="javascript:void(0)" style="display:none;" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="${question.id}">edit</a>
           <a href="javascript:void(0)" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase" data-id="${question.id}">delete</a>
          </div>
         </div>`;
  element.appendChild(div);
};

//show card form
Question.prototype.showForm = function (element) {
  element.classList.add('showForm');
};

//hide card form
Question.prototype.hideForm = function (element) {
  element.classList.remove('showForm');
};

// clear form values
Question.prototype.clearFields = function (question, answer) {
  question.value = '';
  answer.value = '';
};

Init();
