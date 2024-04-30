import './App.css'
import Book from './pages/Book.jsx'
import Home from './pages/Home.jsx'
import Welcome from './pages/Welcome.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (

    <Routes>
      <Route path='/' element={<Welcome />}></Route>
      <Route path='/books' element={<Home />}></Route>
      <Route path='/books/:bookId' element={<Book />}></Route>
    </Routes>

  )
}

export default App
