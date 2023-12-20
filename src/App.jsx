import { Routes, Route } from 'react-router-dom'
import Maison from './pages/Maison/maison'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import Error from './components/Error/error'
import About from './pages/About/about'
import Logement from './pages/Logement/logement'
import  './utils/style/style.css'


function App() {
  return (
    <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Maison />}/>
            <Route path="/about" element={<About />} />
            <Route path="/logement/:logementId" element={<Logement />}/>
            <Route path="/*" element={<Error />} />
          </Routes>
          <Footer />
          
    </div>
  )
}

export default App
