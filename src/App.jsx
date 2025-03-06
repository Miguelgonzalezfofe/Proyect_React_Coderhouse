import './App.css'
import Header from './components/Header/header_n'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <Header />
      <ItemListContainer saludo={"Hola, este Sera un contenedor para los productos"} />
    </>
  )
}

export default App
