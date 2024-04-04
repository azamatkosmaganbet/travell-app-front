import React, { FC, ReactNode } from "react";
import "./QuestionForm.scss";
import { Form, Spinner } from "react-bootstrap";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import { ReactComponent as Back } from "../../assets/icons/back.svg";
import { Link } from "react-router-dom";
interface IQuiz {
  question: string;
  isFirstQuestion: boolean;
  isLastQuestion?: boolean;
  onNextQuestion?: () => void; // Обработчик для перехода к следующему вопросу
  onPreviousQuestion: () => void;
  children: ReactNode;
  isLoading?: boolean;
}

const QuestionForm: FC<IQuiz> = ({
  question,
  isFirstQuestion,
  onNextQuestion,
  onPreviousQuestion,
  isLastQuestion = false,
  children,
  isLoading,
}) => {
  return (
    <>
      <div className="quiz-form-title">
        <div className="quiz-form-title-in">
          <div className="quiz-form-title-in-text">
            <h2>{question}</h2>
            {children}
          </div>
        </div>
      </div>
      <div className="quiz-form-footer">
        {!isFirstQuestion && (
          <button className="back-btn" onClick={onPreviousQuestion}>
            <Back />
          </button>
        )}
        <b>{isLastQuestion ? <Link to="/">На главную</Link> : "Продолжим ?"}</b>
        <button
          type={isLastQuestion ? "submit" : "button"}
          onClick={onNextQuestion}
        >
          {isLoading ? (
            <Spinner className="text-primary" />
          ) : (
            <Check />
          )}
        </button>
      </div>
    </>
  );
};

export default QuestionForm;
