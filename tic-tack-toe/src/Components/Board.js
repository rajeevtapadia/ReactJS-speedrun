import React, {useRef, useState} from "react";
import "./Board.css";
import {logRoles} from "@testing-library/react";

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
//    if box is empty fill it with correct symbol
    if(boardState[index] === ''){
      const current = turn === 0 ? 'O' : 'X'
      event.target.innerText = current
      boardState[index] = current
      setTurn(turn === 0 ? 1 : 0)
      setCounter(counter+1)
      checkWin()
    }
//    if board is full reset
      if(counter === 9){
        resetBoard()
      }
  }

//  handle win cases
  function checkRow(){
    for(let i = 0; i < 9; i+=3){
      if(boardState[i] !== '' && boardState[i] === boardState[i+1] && boardState[i] === boardState[i+2])
        return true;
    }
    return false;
  }

  function checkCol(){
    for(let i = 0; i < 3; i++){
      if(boardState[i] !== '' && boardState[i] === boardState[i+3] && boardState[i] === boardState[i+6])
        return true;
    }
    return false;
  }

  function checkDiag(){
    return boardState[0] !== '' && boardState[4] && boardState[8] ||
      boardState[2] !== '' && boardState[4] && boardState[6];
  }

  function checkWin(){
    if(checkRow() || checkCol() || checkDiag()){
      console.log('bim bim bam bam')
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
