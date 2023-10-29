import React from "react";

const SetQuestion = () => {
  return (
    <div className="flex flex-col mx-auto space-y-6 w-96">
      <textarea className="question" placeholder="question"></textarea>
      <div className="flex flex-column space-y-3 w-72">
        <input className="option" name="1" placeholder="option 1"></input>
        <input className="option" name="2" placeholder="option 2"></input>
        <input className="option" name="3" placeholder="option 3"></input>
        <input className="option" name="4" placeholder="option 4"></input>
      </div>
      <input
        className="answer"
        name="answer"
        placeholder="Correct Answer"
        type="number"
      ></input>
    </div>
  );
};

export default SetQuestion;
