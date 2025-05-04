import { useState, useEffect } from 'react'
import CharacterCard from '../components/CharacterCard'
import { getCharacters } from '../services/swapiService'

function CharacterList() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [pageInfo, setPageInfo] = useState({
    count: 0,
    next: null,
    previous: null
  })

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true)
        const data = await getCharacters(currentPage)
        setCharacters(data.results)
        setPageInfo({
          count: data.count,
          next: data.next,
          previous: data.previous
        })
        setError(null)
      } catch (err) {
        setError('Error al cargar los personajes. Por favor, intenta de nuevo más tarde.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacters()
  }, [currentPage])

  const handlePreviousPage = () => {
    if (pageInfo.previous) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (pageInfo.next) {
      setCurrentPage(currentPage + 1)
    }
  }

  if (loading) {
    return <div className="loading">Cargando personajes...</div>
  }

  if (error) {
    return <div className="error-message">{error}</div>
  }

  return (
    <div>
      <h1>Personajes de Star Wars</h1>
      <div className="card-grid">
        {characters.map((character) => (
          <CharacterCard key={character.url} character={character} />
        ))}
      </div>
      <div className="page-controls">
        <button 
          className="btn" 
          onClick={handlePreviousPage} 
          disabled={!pageInfo.previous}
          style={{ opacity: pageInfo.previous ? 1 : 0.5 }}
        >
          Página Anterior
        </button>
        <span>Página {currentPage}</span>
        <button 
          className="btn" 
          onClick={handleNextPage} 
          disabled={!pageInfo.next}
          style={{ opacity: pageInfo.next ? 1 : 0.5 }}
        >
          Página Siguiente
        </button>
      </div>
    </div>
  )
}

export default CharacterList