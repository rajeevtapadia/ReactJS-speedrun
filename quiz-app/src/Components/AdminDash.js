import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const AdminDash = ({ admin }) => {
  const [quizTable, setQuizTable] = useState(null)
  useEffect(() => {
    const fetchQuizes = async () => {
      const quizes = [];
      const docs = await getDocs(collection(db, `Admins/${admin}/Quizes`));
      let index = 1;
      docs.forEach((doc) => {
        quizes.push({ id: index++, name: doc.data().quizName });
      });
      return quizes;
    };
    fetchQuizes().then((quizes) => {
      const table = quizes.map((quiz) => (
        <tr key={quiz.id}>
          <td>{quiz.id}</td>
          <td>{quiz.name}</td>
          {/*<td>{quiz.attempts}</td>*/}
          {/*<td>{quiz.code}</td>*/}
        </tr>
      ));
    console.log(table);
    setQuizTable(table);
    });
  }, []);

  return (
    <>
      <div className="flex justify-center">Admin Dashboard</div>
      <div className="flex flex-col h-screen justify-center items-center">
        <button className="btn btn-primary">
          <Link to={"/admin/create-quiz"}>Create Quiz</Link>
        </button>
        <table>
          <tr>
            <th>Sr No</th>
            <th>Quiz Name</th>
            <th>No of Attempts</th>
            <th>Quiz Code</th>
          </tr>
          {quizTable}
        </table>
      </div>
    </>
  );
};

export default AdminDash;
