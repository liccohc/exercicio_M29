import Header from './components/Cabecalho'
import { Hero } from './components/Hero/HeroStyled'
import ListaVagas from './containers/ListaVaga'

import './global.css'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App