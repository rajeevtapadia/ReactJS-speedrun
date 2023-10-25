import React, { useState, useRef } from "react";
import SetQuestion from "./SetQuestion";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const CreateQuiz = ({ admin }) => {
  const [quizName, setQuizName] = useState("");
  const [queNo, setQueNo] = useState(0);
  const formRef = useRef(null);

  const questions = [];
  for (let i = 0; i < queNo; i++) {
    questions.push(
      <div key={i}>
        <p>Questions {i + 1}</p>
        <SetQuestion />
      </div>
    );
  }

  function getFormData() {
    const queArr = [];
    let que = { options: [] };
    Array.from(formRef.current.elements).forEach((field) => {
      if (field.className === "question") {
        que.question = field.value;
      } else if (field.className === "option") {
        que.options.push(field.value);
      } else if (field.className === "answer") {
        que.answer = +field.value;
        queArr.push(que);
        que = { options: [] };
      }
    });
    console.log(queArr);
    return queArr;
  }

  const createQuizHandler = async () => {
    const data = getFormData();
    const adminRef = collection(db, `Admins/${admin}/Quizes`);
    const res = await addDoc(adminRef, { quizName: quizName, noOfQue: queNo, quiz: data });
    console.log(res);
  };

  return (
    <div className="flex flex-column items-center space-y-4">
      <label>Quiz Name</label>
      <input onChange={(e) => setQuizName(e.target.value)}></input>
      <label>Number of questions</label>
      <input onChange={(e) => setQueNo(e.target.value)}></input>
      <form className="" ref={formRef}>
        {questions}
      </form>
      <button className="btn btn-primary" onClick={createQuizHandler}>
        Create Quiz
      </button>
    </div>
  );
};

export default CreateQuiz;
