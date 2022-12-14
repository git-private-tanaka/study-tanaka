import React from 'react'
import { ISquare } from '../interface'
import Square from './Square'
interface BoardProps {
  squares: ISquare[]
  onClick: (i: number) => void
}

const Board = (props: BoardProps): JSX.Element | null => {
  const renderSquare = (i: number): JSX.Element | null => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    )
  }
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
export default Board
