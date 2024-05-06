const questions = [
  {
    question: "What year is it currently?",
    type: "multipleChoice",
    answers: ["2022","2021","2024","1990"],
    correctAnswer: ["2024"],
  },
  {
    question:"Did the Kansas City Chiefs win the Super Bowl 2024?",
    type: "trueFalse",
    answers: ["True","False"],
    correctAnswer: ["True"],
  },
  {
    question: "Is COMS-3163 held in Norman Hall?",
    type: "trueFalse",
    answers: ["True", "False"],
    correctAnswer: ["False"],
  },
  {
    question: "What state is ATU located in?",
    type: "multipleChoice",
    answers: ["Arkansas", "Colorado", "Nebraska", "Alabama"],
    correctAnswer: ["Arkansas"],
  },
  {
    question: "What color is the sky?",
    type: "multipleChoice",
    answers: ["Red","Yellow","Blue","Green"],
    correctAnswer: ["Blue"],
  },
  {
    question: "Is my name Spencer Anderson?",
    type: "trueFalse",
    answers: ["True","False"],
    correctAnswer: ["True"],
  },
  {
    question: "Is the course name for COMS-3163: 'Web Programming'?",
    type: "trueFalse",
    answers: ["True","False"],
    correctAnswer: ["True"],
  },
  {
    question: "If I have 13 apples and eat 4 of them, how many apples do I have left?",
    type: "multipleChoice",
    answers: ["11","17","5","9"],
    correctAnswer: ["9"],
  },
  {
    question: "This project is using which framework?",
    type: "multipleChoice",
    answers: ["REACT","Angular","Vue.js","None"],
    correctAnswer: ["None"],
  },
  {
    question: "Is the following statement true or false?: When doing web programming, everything works the first time!",
    type: "trueFalse",
    answers: ["True","False"],
    correctAnswer: ["False"],
  },
];

let currentScore = 0;
let currentQuestion;
const startButton = document.getElementById('start-button');
const handleNextQuestion = document.getElementById('submit-button');

function startQuiz() {
  currentQuestion = 0;
  currentScore = 0;
  startButton.classList.add('hide');
  showQuestion(currentQuestion);
}
function isCorrectAnswer(choice, correctAnswer) {
  if (choice == correctAnswer) {
    currentScore += 1;
    console.log('score', currentScore);
  }
  return currentScore;
}

function showQuestion(QuestionIndex) {
  if (currentQuestion === questions.length) {
    showResults(currentScore);
    return;
  }

  const quiz = document.getElementById('quiz');
  const option = questions[QuestionIndex].answers;

  if (questions[currentQuestion].type === 'trueFalse') {
    quiz.innerHTML = `<div class="question">
      <h3>Question ${QuestionIndex + 1}</h3>
      <p>${questions[QuestionIndex].question}</p>
      <form id='answers'>
        <input type="radio" id="option1" name="question" value="True" />
        <label for="option1">True</label><br />
        <input type="radio" id="option2" name="question" value="False" />
        <label for="option2">False</label><br />
      </form>`;
  } else if (questions[currentQuestion].type === 'multipleChoice') {
    quiz.innerHTML = `<div class="question">
      <h3>Question ${QuestionIndex + 1}</h3>
      <p>${questions[QuestionIndex].question}</p>
      <form id='answers'>
        <input type="radio" id="option1" name="question" value="${option[0]}"/>
        <label for="option1">${option[0]}</label><br/>
        <input type="radio" id="option2" name="question" value="${option[1]}"/>
        <label for="option2">${option[1]}</label><br />
        <input type="radio" id="option3" name="question" value="${option[2]}" />
        <label for="option3">${option[2]}</label><br />
        <input type="radio" id="option4" name="question" value="${option[3]}"/>
        <label for="option4">${option[3]}</label><br />
      </form>`;
  }
}

function showResults(totalcurrentScore) {
  document.getElementById('quiz').innerHTML = '';
  handleNextQuestion.classList.add('hide');
  const results = document.getElementById('results');
  results.innerHTML = `<div class="results">
  <p> Score: ${totalcurrentScore}</p>`;
}

function NextQuestion(e) {
  const form = document.getElementById('answers');
  const data = new FormData(form);
  const choice = document.querySelector('input[name="question"]:checked').value;
  console.log(choice);
  isCorrectAnswer(choice, questions[currentQuestion].correctAnswer);
  console.log('correctanswer', questions[currentQuestion].correctAnswer)
  currentQuestion += 1;
  console.log(currentScore);
  showQuestion(currentQuestion);
}

startButton.addEventListener('click', startQuiz);
handleNextQuestion.addEventListener('click', NextQuestion);

