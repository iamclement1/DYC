import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ <About /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
