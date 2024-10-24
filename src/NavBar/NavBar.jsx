import CartWidget from "./CarWidget";
import { BsBox } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./navbar.css"

const NavBar = () => {


  return (
    <nav className="navbar">

      <ul className="categories">
        <li className="category">
          <Link to="/category/remeras" >Remeras</Link>
        </li>
        <li className="category">
          <Link to="/category/pantalones">Pantalones</Link>
        </li>
        <li className="category">
          <Link to="/category/zapatillas">Zapatillas</Link>
        </li>
      </ul>

      <Link to="/" className="brand primary-font-color">
        <BsBox className="icon-brand" />
        <p className="title-brand ">Box Ecommerce</p>
      </Link>

      <CartWidget />
    </nav>
  )
}
export default NavBar