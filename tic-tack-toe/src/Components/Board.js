import React, {useRef, useState} from "react";
import "./Board.css";
import Box from "./Box";

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
      checkWin(current)
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

//  function checkWin(){
//    if(checkRow() || checkCol() || checkDiag()){
//      console.log('bim bim bam bam')
////      resetBoard()
//    }
//  }

  function checkWin(winner){
    if (checkRow())
      console.log('row', winner)
    else if(checkCol())
      console.log('col', winner)
    else if(checkDiag())
      console.log('diag', winner)
  }

  return (
    <div className="wrapper">
      <div className="board" ref={boardRef}>
        <Box handleClick={(e) => {handleClick(e, 0)}} classs=""/>
        <Box handleClick={(e) => {handleClick(e, 1)}} classs="left"/>
        <Box handleClick={(e) => {handleClick(e, 2)}} classs="left"/>
        <Box handleClick={(e) => {handleClick(e, 3)}} classs="up"/>
        <Box handleClick={(e) => {handleClick(e, 4)}} classs="left up"/>
        <Box handleClick={(e) => {handleClick(e, 5)}} classs="left up"/>
        <Box handleClick={(e) => {handleClick(e, 6)}} classs="up"/>
        <Box handleClick={(e) => {handleClick(e, 7)}} classs="left up"/>
        <Box handleClick={(e) => {handleClick(e, 8)}} classs="left up"/>
      </div>
    </div>
  );
};

export default Board;
