import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import AllProduct from './components/AllProduct'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes >
        <Route path='/' element={
          <>
            <AddProduct />
            <AllProduct />
          </>
        } />
      </Routes>
    </>
  )
}

export default App
