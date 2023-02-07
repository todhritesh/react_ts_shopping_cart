import React, { useEffect , useRef} from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import styles from "./cart-sidebar.module.css"
import CartItem from './CartItem'

type CartSidebarProps = {
  isOpen : boolean
}

function CartSidebar({isOpen}:CartSidebarProps) {
  const {closeCart,cartItems} = useShoppingCart()
  const sidebarRef = useRef<HTMLDivElement>(null)

  return (
      <div className={`${styles.sidebar} ${isOpen?styles.sidebar_open:styles.sidebar_close}`} >
        <div className="px-4 position-relative">
          <div className={`row pt-5 mt-3 ${styles.sidebar_header}`}>
            <button onClick={closeCart} type="button" className="ms-auto btn-close btn-close-black " style={{boxShadow:'none'}} aria-label="Close"></button>
            <h4>YOUR CART</h4>
          </div>
          <div className={`row ${styles.sidebar_content}`}>
            {
              cartItems.map(item=>(
                <CartItem key={item.id} {...item} />
              ))
            }
          </div>
        </div>
      </div>  
  )
}

export default CartSidebar