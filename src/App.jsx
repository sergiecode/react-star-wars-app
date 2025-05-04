import { Routes, Route } from 'react-router-dom'
import CharacterList from './pages/CharacterList'
import CharacterDetail from './pages/CharacterDetail'
import './App.css'
import Navbar from './components/Navbar/Navbar'

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