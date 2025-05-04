import { Link } from 'react-router-dom'
import { useCharacterDetail } from '../hooks/useCharacterDetail'

function CharacterDetail() {
  const { character, loading, error } = useCharacterDetail()

  if (loading) {
    return <div className="loading">Cargando detalles del personaje...</div>
  }

  if (error || !character) {
    return <div className="error-message">{error || 'No se encontró el personaje'}</div>
  }

  return (
    <div className="character-detail">
      <h1>{character.name}</h1>

      <div className="detail-section">
        <h2>Información Personal</h2>
        <div className="detail-grid">
          <div className="detail-item">
            <span>Altura:</span> {character.height !== 'unknown' ? `${character.height} cm` : 'Desconocida'}
          </div>
          <div className="detail-item">
            <span>Peso:</span> {character.mass !== 'unknown' ? `${character.mass} kg` : 'Desconocido'}
          </div>
          <div className="detail-item">
            <span>Color de pelo:</span> {character.hair_color !== 'n/a' ? character.hair_color : 'No aplicable'}
          </div>
          <div className="detail-item">
            <span>Color de piel:</span> {character.skin_color}
          </div>
          <div className="detail-item">
            <span>Color de ojos:</span> {character.eye_color}
          </div>
          <div className="detail-item">
            <span>Año de nacimiento:</span> {character.birth_year !== 'unknown' ? character.birth_year : 'Desconocido'}
          </div>
          <div className="detail-item">
            <span>Género:</span> {character.gender !== 'n/a' ? character.gender : 'No aplicable'}
          </div>
        </div>
      </div>

      <div className="detail-section">
        <h2>Información Adicional</h2>
        <div className="detail-grid">
          <div className="detail-item">
            <span>Cantidad de películas:</span> {character.films.length}
          </div>
          <div className="detail-item">
            <span>Cantidad de vehículos:</span> {character.vehicles.length}
          </div>
          <div className="detail-item">
            <span>Cantidad de naves:</span> {character.starships.length}
          </div>
        </div>
      </div>

      <div className="back-btn">
        <Link to="/" className="btn">
          Volver a la lista
        </Link>
      </div>
    </div>
  )
}

export default CharacterDetail