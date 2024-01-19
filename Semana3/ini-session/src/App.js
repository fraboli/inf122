import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import Registro from './componentes/Registro';
import Login from './componentes/Login';
import Perfil from './componentes/Perfil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Galeria from './componentes/Galeria';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>  
            <Route path="/" element={<Navbar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/galeria" element={<Galeria/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
