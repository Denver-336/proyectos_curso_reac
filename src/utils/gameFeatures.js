import { WINNER_COMBOS } from './constants.js'

export const checkWinner = (boardToCheck) => {
  // revisando combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  // revisamos si todos los casillero estan llenos significa que hay un empate
  return newBoard.every((square) => square !== null)
}
