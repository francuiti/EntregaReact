import NavBar from './NavBar'; // Asegúrate de la ruta correcta
import ItemListContainer from './ItemListContainer'; // Asegúrate de la ruta correcta
import './App.css';

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer greeting="¡Bienvenido a la tienda!" />
        </div>
    );
}

export default App;
