import { createContext, ReactNode, useContext, useState } from "react";
import CartSidebar from "../components/cart-sidebar/CartSidebar";
import { useLocalStorage } from "../hooks/useLocalStorage";

type ShoppingCartContext = {
    getItemQty : (id:number) => number,
    increaseCartQty : (id:number) => void ,
    decreaseCartQty : (id:number) => void ,
    removeFromCart : (id:number) => void
    cartItems : CartItem[] ,
    openCart : () => void ,
    closeCart : () => void ,
    cartQty : number
}

type CartItem = {
    id:number ,
    qty : number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext )

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

type ShoppingCartProviderProps = {
    children : ReactNode
}
export function ShoppingCartProvider( {children}:ShoppingCartProviderProps ) {
    const [cartItems , setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])
    const [isOpen , setIsOpen] = useState<boolean>(false)

    const getItemQty = (id:number) => {
        return cartItems.find(item=>item.id===id)?.qty || 0
    }

    const increaseCartQty = (id:number) => {
        setCartItems(prev => {
            if(prev.find(item=> item.id ===id)==null){
                return [...prev , {id , qty:1}]
            } else {
                return prev.map(item=>{
                    if(item.id===id){
                        return {...item , qty:item.qty+1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseCartQty = (id:number) => {
        setCartItems(prev => {
            if(prev.find(item=> item.id ===id)?.qty==1){
                return prev.filter(item=>item.id!==id)
            } else {
                return prev.map(item=>{
                    if(item.id===id){
                        return {...item , qty:item.qty-1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeFromCart = (id:number) => {
        return setCartItems(prev=>prev.filter(item=>item.id!==id))
    }

    const cartQty = cartItems.reduce(
        (qty , item) => item.qty + qty , 0
    )

    const openCart = () => setIsOpen(true)

    const closeCart = () => setIsOpen(false) 



    return <ShoppingCartContext.Provider value={{getItemQty,increaseCartQty,decreaseCartQty,removeFromCart,cartItems,cartQty,openCart,closeCart}}>
        {children}
        <CartSidebar isOpen={isOpen} />
    </ShoppingCartContext.Provider>
}