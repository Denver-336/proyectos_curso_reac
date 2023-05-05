import './style/App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './utils/constants.js'
import { checkWinner, checkEndGame } from './utils/gameFeatures.js'
import { useState } from 'react'
import { WinnerModal } from './components/WinnerModal.jsx'
import Board from './components/Board.jsx'
import { saveGameStorage, resetGameStorage } from './utils/localStorage.js'

function TicTacToe () {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return boardFromLocalStorage
      ? JSON.parse(boardFromLocalStorage)
      : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage || TURNS.x
  })
  // null no hay ganador, false hay empate
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // no actualiza la posicion si ya tiene algo
    if (board[index] || winner) return

    // actualizo el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // actualizo el turno
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    // guardar aqui partida
    saveGameStorage({
      board: newBoard,
      turn: newTurn
    })

    // revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
    resetGameStorage()
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <Board board={board} updateBoard={updateBoard} />
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default TicTacToe
