import Lottie from "lottie-react";
import animationData from '../../assets/lottie/shopping_cart_home.json'


function LottieCart() {
  return (
    <Lottie style={{background:"rgb(13 110 253)",width:"100%"}} animationData={animationData} loop={true} />
  )
}

export default LottieCart