import "./App.css";
import Board from "./Components/Board";
import { useState } from "react"

function App() {
  const [winner, setWinner] = useState('')

  return (
    <div className='content'>
    <Board setWinner={setWinner} winner={winner} />
      {  winner && <p className='result'>{winner === 'Tie' ? `${winner} !!` : `${winner} Won !!`}</p> }
    </div>
  );
}

export default App;
