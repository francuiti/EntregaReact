import "./NavBar.css"; // Asegúrate de que este archivo existe
import Brand from "./Brand"; // Asegúrate de que este archivo existe
import CartWidget from "./CartWidget"; // Asegúrate de que este archivo existe
import { Link } from "react-router-dom"; // Esto debería funcionar ahora

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Brand />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Categoría 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Categoría 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Categoría 3</Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
