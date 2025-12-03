import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './salinaka_pages/Home'
import Shop from './salinaka_pages/Shop'
import Featured from './salinaka_pages/Featured'
import Recommended from './salinaka_pages/Recommended'

function App() {
  return (
    <Router>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/shop' element={<Shop/>}> </Route>
          <Route path='/featured' element={<Featured/>}> </Route>
          <Route path='/recommended' element={<Recommended/>}> </Route>
        </Routes>

    </Router>
  )
}

export default App
