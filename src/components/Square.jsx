/* eslint-disable react/prop-types */
export function Square ({ children, isSelected, updateBoard, index }) {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handlerClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handlerClick} className={className}>
      {children}
    </div>
  )
}
