import React, { useState } from 'react'
import { ISquare, History } from '../interface'
import Board from './Board'
import Moves from './Moves'
// import Square from './Square'

const Game: React.FC = () => {
  const [history, setHistory] = useState<History[]>([
    { squares: Array(9).fill(null) }
  ])
  const [stepNumber, setStepNumber] = useState<number>(0)
  const [xIsNext, setXisNext] = useState<boolean>(true)

  const handleClick = (i: number): void => {
    const _history = history.slice(0, stepNumber + 1)
    const current = _history[_history.length - 1]
    const squares = current.squares.slice()
    if ((calculateWinner(squares) != null) || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O'
    setHistory(_history.concat([{ squares }]))
    setStepNumber(_history.length)
    setXisNext(!xIsNext)
  }
  const jumpTo = (step: number): void => {
    setStepNumber(step)
    setXisNext(step % 2 === 0)
  }

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)
  let status: string
  if (winner != null) {
    status = `Winner: ${winner}`
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <Moves history={history} jumpTo={jumpTo}></Moves>
      </div>
    </div>
  )
}
const calculateWinner = function (squares: ISquare[]): JSX.Element {
  // function calculateWinner (squares: ISquare[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
export default Game
