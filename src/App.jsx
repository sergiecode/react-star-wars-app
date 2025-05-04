import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import CharacterList from './pages/CharacterList'
import CharacterDetail from './pages/CharacterDetail'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="/character/:id" element={<CharacterDetail />} />
        </Routes>
      </div>
    </>
  )
}

export default App