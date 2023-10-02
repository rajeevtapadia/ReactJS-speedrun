import React, {useState} from "react";
import "./Board.css";

const Board = () => {
  const [boardState, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
  const [turn, setTurn] = useState(0)

  function handleClick(event, index){
    if(boardState[index] === ''){
      const current = turn === 0 ? 'O' : 'X'
      event.target.innerText = current
      boardState[index] = current
      setTurn(turn === 0 ? 1 : 0)
    }
  }
  return (
    <div className="wrapper">
      <div className="board">
        <div onClick={(e) => {handleClick(e, 0)}} className=""></div>
        <div onClick={(e) => {handleClick(e, 1)}} className="left"></div>
        <div onClick={(e) => {handleClick(e, 2)}} className="left"></div>
        <div onClick={(e) => {handleClick(e, 3)}} className="up"></div>
        <div onClick={(e) => {handleClick(e, 4)}} className="left up"></div>
        <div onClick={(e) => {handleClick(e, 5)}} className="left up"></div>
        <div onClick={(e) => {handleClick(e, 6)}} className="up"></div>
        <div onClick={(e) => {handleClick(e, 7)}} className="left up"></div>
        <div onClick={(e) => {handleClick(e, 8)}} className="left up"></div>
      </div>
    </div>
  );
};

export default Board;
