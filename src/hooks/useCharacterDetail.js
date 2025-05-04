import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacter } from '../services/swapiService'

export const useCharacterDetail = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        setLoading(true)
        const data = await getCharacter(id)
        setCharacter(data)
        setError(null)
      } catch (err) {
        setError('Error al cargar los detalles del personaje. Por favor, intenta de nuevo más tarde.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchCharacterDetail()
  }, [id])

  return {
    character,
    loading,
    error
  }
}
