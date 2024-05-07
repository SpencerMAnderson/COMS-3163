import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
  questions = [
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
      correctAnswer: ["Angular"],
    },
    {
      question: "Is the following statement true or false?: When doing web programming, everything works the first time!",
      type: "trueFalse",
      answers: ["True","False"],
      correctAnswer: ["False"],
    },
  ];

  currentScore = 0;
  currentQuestion = 0;

  startQuiz() {
    this.currentQuestion = 0;
    this.currentScore = 0;
    this.showQuestion(this.currentQuestion);
  }

  isCorrectAnswer(choice: string, correctAnswer: string[]) {
    if (correctAnswer.includes(choice)) {
      this.currentScore += 1;
    }
  }

  showQuestion(questionIndex: number) {
    if (questionIndex === this.questions.length) {
      this.showResults(this.currentScore);
      return;
    }

    const question = this.questions[questionIndex];
    const quizContainer = document.getElementById('quiz');

    if (quizContainer) {
      let optionsHTML = '';
      if (question.type === 'trueFalse') {
        optionsHTML = `
          <input type="radio" id="option1" name="question" value="True" />
          <label for="option1">True</label><br />
          <input type="radio" id="option2" name="question" value="False" />
          <label for="option2">False</label><br />
        `;
      } else if (question.type === 'multipleChoice') {
        optionsHTML = question.answers.map((answer, index) => `
          <input type="radio" id="option${index + 1}" name="question" value="${answer}" />
          <label for="option${index + 1}">${answer}</label><br />
        `).join('');
      }

      const questionHTML = `
        <div class="question">
          <h3>Question ${questionIndex + 1}</h3>
          <p>${question.question}</p>
          <form id="answers">${optionsHTML}</form>
        </div>
      `;
      quizContainer.innerHTML = questionHTML;
    }
  }

  showResults(totalScore: number) {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');

    if (resultsContainer) {
      resultsContainer.innerHTML = `<div class="results">
        <p>Score: ${totalScore}</p>
      </div>`;
    }

    const nextButton = document.getElementById('submit-button');
    if (nextButton) {
      nextButton.classList.add('hide');
    }
  }

  nextQuestion() {
    const form = document.getElementById('answers') as HTMLFormElement | null;
    const choiceInput = form?.querySelector('input[name="question"]:checked') as HTMLInputElement | null;
    const choice = choiceInput ? choiceInput.value : null;

    if (choice) {
      const correctAnswer = this.questions[this.currentQuestion].correctAnswer;
      this.isCorrectAnswer(choice, correctAnswer);
      this.currentQuestion += 1;
      this.showQuestion(this.currentQuestion);
    } else {
      alert('Select an answer in order to proceed');
    }
  }
}
