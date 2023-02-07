import {Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Home from "./screens/Home"
import Store from "./screens/Store"
import {AnimatePresence} from "framer-motion"
import { useLocation } from "react-router-dom"

function App() {
  const location = useLocation()
  return (
    <>
    <ShoppingCartProvider>
    <Navbar/>
    <AnimatePresence>
      <Routes location={location} key={location.key} >
        <Route path="/" element={<Home/>} />
        <Route path="/store" element={<Store/>} />
      </Routes>
    </AnimatePresence> 
    </ShoppingCartProvider>
    </>
  )
}

export default App
