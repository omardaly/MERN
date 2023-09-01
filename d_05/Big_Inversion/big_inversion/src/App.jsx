import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './components/Person'
function App() {
  const users = [{ firstName: "John", lastName: "Done", age: 41, hairColo: "black" },
  { firstName: "Fillmore", lastName: "Millard", age: 35, hairColo: "brown" },
  { firstName: "Smith", lastName: "Jhonh", age: 23, hairColo: "brown" },
  { firstName: "Sarah", lastName: "Doneh", age: 23, hairColo: "brown" }];
  return (
    <>
      {users.map((user, index) => <Person key={index} user={user} />)}

    </>
  );
}

export default App;
