import React, { useState } from "react";
import SetQuestion from "./SetQuestion";

const CreateQuiz = () => {
  const [quizName, setQuizName] = useState("");
  const [queNo, setQueNo] = useState(0);

  const questions = [];
  for (let i = 0; i < queNo; i++) {
    questions.push(
      <div key={i}>
        <p>Questions {i + 1}</p>
        <SetQuestion />
      </div>
    );
  }

  function createQuiz() {}

  return (
    <div className="flex flex-col space-y-4">
      <label>Quiz Name</label>
      <input onChange={(e) => setQuizName(e.target.value)}></input>
      <label>Number of questions</label>
      <input onChange={(e) => setQueNo(e.target.value)}></input>
      {questions}
      <button className="btn btn-primary" onClick={createQuiz}>
        Create Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
