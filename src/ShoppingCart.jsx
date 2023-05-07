import Products from './components/Products.jsx'
import { products as initialProducts } from './example/products.json'
import './style/ShoppingCart.css'
import Header from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useFilters } from './hooks/useFilters.js'
import Cart from './components/Cart.jsx'
import { CartProvider } from './context/cart.jsx'

export default function ShoppingCart () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  )
}
