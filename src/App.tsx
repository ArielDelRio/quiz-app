import React, { useState } from "react";
import { fetchQuizQuestions } from "./Api";
import ReactLoading from "react-loading";
// Components
import QuestionCard from "./components/question-card/QuestionCard";
// Images
import img_title from "./assets/imgTitle.svg";

//types
import { QuestionState, Difficulty } from "./Api";
//styles
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // users answer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // save answer in the array for users answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // move on the next question if not the last question
    const nextQuestion = number + 1;

    nextQuestion === TOTAL_QUESTIONS
      ? setGameOver(true)
      : setNumber(nextQuestion);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <div className="title animate__animated animate__zoomIn">
          <h1>React Quiz</h1>
          <img className="img_title" src={img_title} alt="img title" />
        </div>

        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <div className="animate__animated animate__bounceIn animate__delay-1s">
            <button className="start" onClick={startTrivia}>
              Start
            </button>
          </div>
        ) : null}

        {loading && <ReactLoading type="balls" color="#F2F3D9" width="6em" />}
        {!loading && !gameOver && (
          <div>
            <p className="score">Score: {score}</p>
            <QuestionCard
              questionNr={number + 1}
              totalQuestions={TOTAL_QUESTIONS}
              question={questions[number].question}
              answers={questions[number].answers}
              userAnswer={userAnswers ? userAnswers[number] : undefined}
              callback={checkAnswer}
            />
          </div>
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  );
};

export default App;
