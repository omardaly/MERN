// import react from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
// import Nav from "./components/Nav"
import AuthorShow from './components/AuthorShow'
import AuthorCreate from './components/AuthorCreate'
import AuthorUpdate from './components/AuthorUpdate'

// import NoteEdit from './components/NoteEdit'
function App() {
  const baseUrl = "http://localhost:8000/api"
  return (
    <div className="container mt-3">

      <Routes>

        {/* <Route path='/authors' element={<AuthorList />} /> */}
        <Route path='/authors/:id/edit' element={<AuthorUpdate />} />
        <Route path='/' element={<AuthorShow baseUrl={baseUrl} />} />
        <Route path='/authors/new' element={<AuthorCreate />} />
        {/* <Route path='*' element={<Navigate to='/authors' replace />} /> */}
      </Routes>
    </div>
  )
}

export default App
