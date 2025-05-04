import CharacterCard from '../components/CharacterCard'
import { useCharacterList } from '../hooks/useCharacterList'

function CharacterList() {

  const { 
    characters, 
    loading, 
    error, 
    currentPage, 
    pageInfo, 
    handlePreviousPage, 
    handleNextPage 
  } = useCharacterList()

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