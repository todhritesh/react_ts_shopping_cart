import React from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import items from "../../data/items.json"

type CartItemProps = {
    id : number ,
    qty : number
}

function CartItem({id , qty}:CartItemProps) {
    const {removeFromCart} = useShoppingCart()
    const item = items.find(i=>i.id===id)
    if(item===null) return null
  return (
    <div className="col-12 d-flex gap-2 mb-4 align-items-center">
        <img width="30%" src={item?.imgUrl} alt={item?.name} className="img-fluid" />
        <div className="d-flex flex-column">
            <p className="">{item?.name}</p>
            <p className="">{item?.price}</p>
        </div>
        <div className="d-flex flex-column ms-auto">
            <p className="">
                {item?.price?item?.price*qty:null}
            </p>
            <button onClick={()=>removeFromCart(id)} style={{width:"fit-content"}} className="btn btn-outline-danger ms-auto">
                &times;
            </button>
        </div>
    </div>
  )
}

export default CartItem