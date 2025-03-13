import './App.css'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CardProducto from './components/clases3/clase'



function App() {

  return (
    <>
      <Header />
      <ItemListContainer saludo={"Hola, este Sera un contenedor para los productos"} />
      <CardProducto />
    </>
  )
}

export default App
