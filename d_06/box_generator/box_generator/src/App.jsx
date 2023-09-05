import { useState } from 'react'
import './App.css'
import Box_generator from './components/Box_generator'
import Display from './components/Display'
function App() {
  const [boxState, setBox] = useState([])
  return (
    <fieldset>
      <legend>
        <h2>test</h2>
      </legend>
      <Box_generator box={boxState} setBox={setBox} />
      <Display box={boxState} />

    </fieldset>
  )
}

export default App
