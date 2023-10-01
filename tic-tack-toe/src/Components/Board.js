import React from "react";
import "./Board.css";

const Board = () => {
  return (
    <div className="wrapper">
      <div className="board">
        <div className=""></div>
        <div className="left"></div>
        <div className="left"></div>
        <div className="up"></div>
        <div className="left up"></div>
        <div className="left up"></div>
        <div className="up"></div>
        <div className="left up"></div>
        <div className="left up"></div>
      </div>
    </div>
  );
};

export default Board;
