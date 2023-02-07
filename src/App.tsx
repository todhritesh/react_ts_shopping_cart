import {Routes , Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import Home from "./screens/Home"
import Store from "./screens/Store"

function App() {

  return (
    <>
    <ShoppingCartProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Store/>} />
    </Routes>
    </ShoppingCartProvider>
    </>
  )
}

export default App
