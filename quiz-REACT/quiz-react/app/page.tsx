"use client";
import React, { useState } from "react";

export default function Quiz() {
  const questionInfo = [
    {
      question: "What year is it currently?",
      answers: ["2022","2021","2024","1990",],
      correctAnswer: "2024",
    },
    {
      question:"Did the Kansas City Chiefs win the Super Bowl 2024?",
      answers: ["True","False"],
      correctAnswer: "True",
    },
    {
      question: "Is COMS-3163 held in Norman Hall?",
      answers: ["True", "False"],
      correctAnswer: "False",
    },
    {
      question: "What state is ATU located in?",
      answers: ["Arkansas", "Colorado", "Nebraska", "Alabama"],
      correctAnswer: "Arkansas",
    },
    {
      question: "What color is the sky?",
      answers: ["Red","Yellow","Blue","Green"],
      correctAnswer: "Blue",
    },
    {
      question: "Is my name Spencer Anderson?",
      answers: ["True","False"],
      correctAnswer: "True",
    },
    {
      question: "Is the course name for COMS-3163: 'Web Programming'?",
      answers: ["True","False"],
      correctAnswer: "True",
    },
    {
      question: "If I have 13 apples and eat 4 of them, how many apples do I have left?",
      answers: ["11","17","5","9"],
      correctAnswer: "9",
    },
    {
      question: "This project is using which framework?",
      answers: ["REACT","Angular","None"],
      correctAnswer: "REACT",
    },
    {
      question: "Is the following statement true or false?: When doing web programming, everything works the first time!",
      answers: ["True","False"],
      correctAnswer: "False",
    },
  ];
  
  const [score, setScore] = useState(0);
  const [selectedOption, setselectedOption] = useState(null);
  const [questionIndex, setquestionIndex] = useState(0);
  const [showResults, setshowResults] = useState(false);

  const handleAnswerChoice = (e) => {
    setselectedOption(e.target.value);
  };

  const checkAnswer = (answer) => {
    return answer === questionInfo[questionIndex].correctAnswer;
  };

  const handleNextQuestion = () => {
    if (checkAnswer(selectedOption)) {
      setScore(score + 1);
    }
    if (questionIndex + 1 === questionInfo.length) {
      setshowResults(true);
    } else {
      setquestionIndex(questionIndex + 1);
      setselectedOption(null);
    }
  };

  if (showResults) {
    return <Results score={score} totalQuestions={questionInfo.length} />;
  }

  return (
    <div>
      <Questions
        questionInfo={questionInfo}
        questionIndex={questionIndex}
      />
      <Answers
        answers={questionInfo[questionIndex].answers}
        selectedOption={selectedOption}
        handleAnswerChoice={handleAnswerChoice}
      />
      <button onClick={handleNextQuestion}>Next question &gt;&gt;</button>
    </div>
  );
}

function Questions({ questionInfo, questionIndex }) {
  return (
    <div>
      <h1>Question {questionIndex + 1}:</h1>
      {questionInfo[questionIndex].question}
    </div>
  );
}

function Answers({ answers, selectedOption, handleAnswerChoice }) {
  return (
    <div>
      {answers.map((answer, index) => (
        <label key={index}>
          <input
            type="radio"
            value={answer}
            checked={selectedOption === answer}
            onChange={handleAnswerChoice}
          />
          {answer} <br />
        </label>
      ))}
    </div>
  );
}

function Results({ score, totalQuestions }) {
  return (
    <div>
      <p>
        Score: {score} out of {totalQuestions}
      </p>
    </div>
  );
}