import { Link } from 'react-router-dom'

function CharacterCard({ character }) {
  // Extraer el ID del personaje desde la URL
  const characterId = character.url.split('/').filter(Boolean).pop()

  return (
    <div className="card">
      <div className="card-content">
        <h3>{character.name}</h3>
        <div className="card-info">
          <span>Género:</span> {character.gender !== 'n/a' ? character.gender : 'No aplicable'}
        </div>
        <div className="card-info">
          <span>Altura:</span> {character.height !== 'unknown' ? `${character.height} cm` : 'Desconocida'}
        </div>
        <div className="card-info">
          <span>Peso:</span> {character.mass !== 'unknown' ? `${character.mass} kg` : 'Desconocido'}
        </div>
        <div className="card-actions">
          <Link to={`/character/${characterId}`} className="btn">
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard