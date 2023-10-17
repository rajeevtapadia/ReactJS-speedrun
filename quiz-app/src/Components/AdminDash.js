import React from "react";

const AdminDash = () => {
  const quizes = [
    { no: 1, name: "quiz1", attempts: 2, code: "qoieut" },
    { no: 2, name: "quiz1", attempts: 2, code: "qoieut" },
    { no: 3, name: "quiz1", attempts: 2, code: "qoieut" },
  ];

  const table = quizes.map((quiz) => (
    <tr key={quiz.no}>
      <td>{quiz.no}</td>
      <td>{quiz.name}</td>
      <td>{quiz.attempts}</td>
      <td>{quiz.code}</td>
    </tr>
  ));

  return (
    <>
      <div>Admin Dashboard</div>
      <button className="btn btn-primary">Create Quiz</button>

      <table>
        <tr>
          <th>Sr No</th>
          <th> Quiz Name</th>
          <th>No of Attempts</th>
          <th>Quiz Code</th>
        </tr>
        {table}
      </table>
    </>
  );
};

export default AdminDash;
