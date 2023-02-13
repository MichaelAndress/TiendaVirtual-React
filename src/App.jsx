import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Cart } from './components/Cart'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Producto } from './components/Producto'
import { Products } from './components/Products'

function App() {

  return (
    <>
      <Navbar />
    <Routes>
      <Route path='/' element={ <Home /> }/>
      <Route path='/productos' element={ <Products /> }/>
      <Route path='/producto/:id' element={ <Producto /> }/>
      <Route path='/cart' element={ <Cart /> }/>

    </Routes>
    </>
  )
}

export default App
