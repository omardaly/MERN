import { useState } from 'react'
import './App.css'

function App() {
  const [superHero, setSuperHeros] = useState([])
  fetch("https://akabab.github.io/superhero-api/api")
    .then(response => response.json())
    .then(jsonResponse => console.log("RESPONSE FROM API", jsonResponse))
    .catch(error => console.log(error))
  setSuperHeros

  return (
    <>
      <fieldset>
        <legend>
          <h2>SuperHeros</h2>
          {/* {Json.stringify(JsonResponse)} */}
          <button onClick={{ fetchApi }}>fetch SuperHeros</button>
        </legend>
      </fieldset>

    </>
  )
}

export default App
