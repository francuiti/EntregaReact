import NavBar from './NavBar/NavBar'
import ItemList from './Components/ItemListContainer/ItemList'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={ <ItemListContainer saludo={"Hola Mundo!!"} /> } />
          <Route path="/category/:idCategory" element={<ItemListContainer saludo={"Hola Mundo!!"} />} />
          <Route path="/detail/:idProduct" element={ <ItemDetailContainer /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App