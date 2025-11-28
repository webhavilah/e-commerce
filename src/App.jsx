import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './salinaka_pages/Navbar'
import Home from './salinaka_pages/Home'
import Shop from './salinaka_pages/Shop'
import Featured from './salinaka_pages/Featured'
import Recommended from './salinaka_pages/Recommended'

function App() {
  return (
    <Router>

      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/shop' element={<Shop/>}> </Route>
          <Route path='/featured' element={<Featured/>}> </Route>
          <Route path='/recommended' element={<Recommended/>}> </Route>
        </Routes>

      </div>
    </Router>
  )
}

export default App
