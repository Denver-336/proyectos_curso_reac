import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import '../style/Cart.css'
import useCart from '../hooks/useCart.js'
import { CartItems } from './CartItems.jsx'

export default function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {
            cart.map(product => (
              <CartItems key={product.id} {...product} addToCart={() => addToCart(product)} />
            ))
          }
        </ul>
        <button onClick={clearCart} style={{ marginTop: '1rem' }}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
