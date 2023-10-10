import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Kedua from './components/pages/Kedua'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/kedua' element={<Kedua/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
