import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './salinaka_pages/Home'
import Shop from './salinaka_pages/Shop'
import Featured from './salinaka_pages/Featured'
import Recommended from './salinaka_pages/Recommended'
import Signup from './salinaka_pages/Signup'
import { SignIn } from './salinaka_pages/SignIn'
import NotFound from './salinaka_pages/NotFound'
import Product from './salinaka_pages/Product'

function App() {
  return (
    <Router>

        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/shop' element={<Shop/>}> </Route>
          <Route path='/featured' element={<Featured/>}> </Route>
          <Route path='/recommended' element={<Recommended/>}> </Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
          <Route path='/product/:id' element={<Product/>}></Route>
          {/* <Route path='/*' element={<NotFound/>}></Route> */}
        </Routes>

    </Router>
  )
}

export default App
