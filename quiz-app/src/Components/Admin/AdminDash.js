import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";

const AdminDash = ({ admin }) => {
  const [quizTable, setQuizTable] = useState(null);

  useEffect(() => {
    const fetchQuizes = async () => {
      const quizes = [];
      let i = 1;
      const quizQuery = await getDocs(collection(db, `Admins/${admin}/Quizes`));

      for (const quiz of quizQuery.docs) {
        const attempterQuery = await getDocs(
          collection(db, `Admins/${admin}/Quizes/${quiz.id}/Attempters`)
        );
        quizes.push({
          no: i++,
          name: quiz.data().quizName,
          attempts: attempterQuery.size,
          code: quiz.id,
        });
      }
      return quizes;
    };
    fetchQuizes()
      .then((quizes) => {
        const table = quizes.map((quiz) => (
          <tr>
            <td className="border border-grey-800 text-center">{quiz.no}</td>
            <td className="border border-grey-800 text-center">{quiz.name}</td>
            <td className="border border-grey-800 text-center">
              {quiz.attempts}
            </td>
            <td className="border border-grey-800 text-center">{quiz.code}</td>
          </tr>
        ));
        setQuizTable(table);
      })
      .catch((error) => console.log("error creating table", error));
  }, [admin]);

  return (
    <>
      <div className="flex justify-center">Admin Dashboard</div>
      <div className="flex flex-col h-screen justify-center items-center">
        <button className="btn btn-primary">
          <Link to={"/admin/create-quiz"}>Create Quiz</Link>
        </button>
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="border border-grey-800 text-center">Sr No</th>
              <th className="border border-grey-800 text-center">Quiz Name</th>
              <th className="border border-grey-800 text-center">
                No of Attempts
              </th>
              <th className="border border-grey-800 text-center">Quiz Code</th>
            </tr>
          </thead>
          <tbody>{quizTable}</tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDash;
