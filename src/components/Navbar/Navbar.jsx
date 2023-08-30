import "./navbar.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";


export function Navbar(){
    const counter = useSelector(state => state.counter.counter)
    return (
        <>
           <nav>
               <ul>
                   <li className="navbar-item">
                       <NavLink to="/">Товары</NavLink>
                   </li>
                   <li className="navbar-item">
                       <NavLink to="/cart">Корзина </NavLink>
                       <span className="counter">{counter}</span>
                   </li>
               </ul>
           </nav>
        </>
    )
}