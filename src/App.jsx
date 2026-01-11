import './App.css'
import LandingPage from './Landing'
import LoginPage from './Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/Login.jsx' element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
