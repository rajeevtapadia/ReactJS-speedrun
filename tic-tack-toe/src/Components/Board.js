import React, {useRef, useState} from "react";
import "./Board.css";

const Board = () => {
  const [boardState, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
  const [turn, setTurn] = useState(0)
  const [counter, setCounter] = useState(0)

  const boardRef = useRef(null)

  function resetBoard(){
    setCounter(0)
    setBoard(['', '', '', '', '', '', '', '', ''])
    const boxes = boardRef.current.children;
    for(let i = 0; i < 9; i++){
      boxes[i].innerText = ''
    }
  }
  function handleClick(event, index){
    if(boardState[index] === ''){
      const current = turn === 0 ? 'O' : 'X'
      event.target.innerText = current
      boardState[index] = current
      setTurn(turn === 0 ? 1 : 0)
      setCounter(counter+1)
    }
      if(counter === 9){
        resetBoard()
      }
  }
  return (
    <div className="wrapper">
      <div className="board" ref={boardRef}>
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
