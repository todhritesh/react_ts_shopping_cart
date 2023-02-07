import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utls/formatPrice'
import {motion} from "framer-motion"

type StoreItemProps = {
    id : number ,
    name: string ,
    price : number ,
    imgUrl : string 
}

const storeItemVariants = {
    hidden:{
        opacity:0,
    },
    whileInView:{
        opacity:1,
        transition:{
            duration:1,
            ease:"easeInOut"
        }
    }
}

function StoreItem({id , name , price , imgUrl} : StoreItemProps) {
    const {decreaseCartQty,getItemQty,increaseCartQty,removeFromCart} = useShoppingCart()
    let qty = getItemQty(id)
  return (
    <motion.div variants={storeItemVariants} initial="hidden" viewport={{once:true}} whileInView="whileInView" className="card">
        <div className="card-body d-flex flex-column ">
            <img style={{height:"200px",objectFit:"cover"}} src={imgUrl} alt="" className="img-fluid" />
            <div className="d-flex justify-content-between mt-3">
                <p className="h4">{name}</p>
                <p className="h4">{formatCurrency(price)}</p>
            </div>
            <div className="d-flex flex-column align-items-center" style={{height:"71px"}}>
                {
                    qty===0?(
                        <button onClick={()=>increaseCartQty(id)} className="btn btn-outline-primary my-auto">+ ADD TO CART</button>
                    ):(
                        <>
                            <div className="d-flex justify-content-center align-items-center">
                                <button onClick={()=>increaseCartQty(id)} className="btn btn-primary btn-sm">+</button>
                                <span className="p-2 fw-bold">{qty} IN CART</span>
                                <button onClick={()=>decreaseCartQty(id)} className="btn btn-primary btn-sm">-</button>
                            </div>
                            <button onClick={()=>removeFromCart(id)} style={{width:"fit-content"}} className="btn btn-sm btn-danger">REMOVE</button>
                        </>

                    )
                }
            </div>
        </div>
    </motion.div>
  )
}

export default StoreItem