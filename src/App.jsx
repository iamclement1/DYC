import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'

function App() {

  return (
    <Router>
      <div className="App font-Montserrat">
        <Navbar />
        <Routes>
          <Route path="/" element={ <Landing /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
