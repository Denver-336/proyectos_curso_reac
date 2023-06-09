// import Project3 from './MouseFollower.jsx'
// import TicTacToe from './TicTacToe.jsx'
// import PruebaTecnica1 from './PruebaTecnica1'
// import Peliculas from './Peliculas'
import ShoppingCart from './ShoppingCart'
import { FiltersProvider } from './context/filters.jsx'
import './style/App.css'

function App () {
  return (
    // <TicTacToe />
    // <Project3 />
    // <PruebaTecnica1 />
    // <Peliculas />
    <FiltersProvider>
      <ShoppingCart />
    </FiltersProvider>
  )
}

export default App
