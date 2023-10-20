import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Layout/Header/Header'
import Menu from './components/Layout/Menu/Menu';
import Home from './components/Views/Home/Home';
import Paciente from './components/Views/Paciente/Paciente';
import Auth from './components/Views/Auth/Auth';
import './App.css';

function App() {
  return (
    <Router>

      <div class="parent">
        <div class="div1"> <Header /></div>
        <div class="div2"> <Menu /></div>
        <div class="div3">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/paciente" element={<Paciente />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
