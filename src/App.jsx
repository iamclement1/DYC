import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Sponsor from './pages/Sponsor'
import 'swiper/css';
import 'swiper/swiper-bundle.css';

function App() {

  return (
    <Router>
      <div className="App font-Montserrat">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/partner" element={<Sponsor />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
