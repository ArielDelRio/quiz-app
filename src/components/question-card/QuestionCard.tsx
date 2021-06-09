import React from "react";
//types
import { AnswerObject } from "../../App";
//styles
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper className="animate__animated animate__fadeInUp">
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }}></p>
    <div>
      {answers.map((answer) => {
        const correct = userAnswer?.correctAnswer === answer;
        const userClicked = userAnswer?.answer === answer;
        return (
          <ButtonWrapper
            key={answer}
            correct={correct}
            userClicked={userClicked}
          >
            <button
              className={
                userClicked
                  ? correct
                    ? "animate__animated animate__tada"
                    : "animate__animated animate__headShake"
                  : ""
              }
              disabled={!!userAnswer}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </ButtonWrapper>
        );
      })}
    </div>
  </Wrapper>
);

export default QuestionCard;
