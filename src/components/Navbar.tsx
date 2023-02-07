import React , {useRef} from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

function Navbar() {
    const navRef = useRef<HTMLDivElement|null>(null)

    const {cartQty,openCart} = useShoppingCart()

    function collapseNavbar(){
        if(navRef.current?.classList.contains('show')){
            navRef.current?.classList.toggle('show')
        }
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
            <div className="container">
                <Link to="/" className="navbar-brand">CART SYSTEM</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div ref={navRef} className="collapse navbar-collapse " id="navbarTogglerDemo01">
                    <div className="border-start d-none d-md-block">&nbsp;</div>
                    <ul className="navbar-nav me-auto align-items-center w-100">
                        <li className="nav-item" onClick={()=>collapseNavbar()}>
                            <NavLink  to="/" className="nav-link">
                                HOME
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={()=>collapseNavbar()}>
                            <NavLink to="/store" className="nav-link">STORE</NavLink>
                        </li>
                        {
                            Boolean(cartQty) && (
                                <li className="nav-item position-relative ms-md-auto" onClick={()=>collapseNavbar()}>
                                    <button onClick={openCart} className="btn btn-sm btn-outline-warning">CART</button>
                                    <span className="bg-danger" style={{ position: 'absolute', width: "20px", height: "20px", display: "flex", justifyContent: 'center', alignItems: 'center', top: "-10px", right: "-5px", borderRadius: "50%", padding: "1px", fontSize: "13px", color: "#ffffff" }} >{cartQty}</span>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar