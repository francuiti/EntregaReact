import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <NavBar />
      <ItemListContainer saludo={"Los mejores productos de limpieza"} />

    </div>
  )
}

export default App