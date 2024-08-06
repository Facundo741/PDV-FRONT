import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar/Navbar"


function App() {

  return (
    <Router>
        <Navbar />
          <Routes>
            {/* <Route path="/venta" element={<Venta />} />
            <Route path="/credito" element={<Credito />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/articulo" element={<Articulo />} />
            <Route path="/cotizar" element={<Cotizar />} /> */}
          </Routes>
    </Router>
  )
}

export default App
