import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Contacto from './pages/Contacto'


function App() {

  return (
    <Router basename="/jahapaite">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacto   />} />
      </Routes>
    </Router>
  )
}

export default App
