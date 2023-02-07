import StoreItem from "../components/StoreItem"
import storeItems from "../data/items.json"
import {motion} from "framer-motion"

const containerVariants = {
    hidden : {
        opacity:0
    },
    visible : {
        opacity:1,
        transition:{
            duration:1.3
        }
    },
    exit:{
        x:"-100vw",
        transition:{
            duration:1,
            ease:"easeInOut"
        }
    }
}

export default function Store () {
    return (
        <motion.div variants={containerVariants} exit="exit" initial="hidden" animate="visible" className="container mt-5">
            <div className="pt-5"></div>
            <div className="row">
                {
                    storeItems.map(item=>(
                        <div key={item.id} className="col-lg-4 p-2 col-md-6">
                            <StoreItem {...item} />
                        </div>
                    ))
                }
            </div>
        </motion.div>
    )
}