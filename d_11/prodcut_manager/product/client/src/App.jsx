import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import CreateProduct from './components/CreateProduct'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={
        <>

          <CreateProduct />
        </>
      } />
    </Routes>
  )
}

export default App
