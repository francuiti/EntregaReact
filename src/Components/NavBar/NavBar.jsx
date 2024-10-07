import CartWidget from "./CartWidget"
import { BsBox } from "react-icons/bs";

import "./navbar.css"

const NavBar = () => {


  return (
    <nav className="navbar">

      <ul className="categories">
        <li className="category">Desodorantes para pisos</li>
        <li className="category">Repelentes de mosquitos</li>
        <li className="category">Jabones</li>
      </ul>

      <div className="brand primary-font-color">
        <BsBox className="icon-brand" />
        <p className="title-brand ">Productos de limpieza</p>
      </div>

      <CartWidget />
    </nav>
  )
}
export default NavBar