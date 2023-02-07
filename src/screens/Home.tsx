import LeftSection from "../components/home/LeftSection";
import LottieCart from "../components/home/LottieCart";
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

export default function Home () {
    return (
        <motion.div exit='exit' initial="hidden" animate="visible" variants={containerVariants} className="container-fluid bg-primary px-5">
            <div className="mt-5 d-flex align-items-center px-md-5" style={{minHeight:"100vh"}}>
                <div className="row align-items-center d-flex flex-lg-row flex-column-reverse">
                    <div className="col-lg-6 mx-auto mb-lg-5">
                        <LeftSection/>
                    </div>
                    <div className="col-lg-6 mx-auto mb-lg-0 mb-5">
                        <LottieCart/>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}