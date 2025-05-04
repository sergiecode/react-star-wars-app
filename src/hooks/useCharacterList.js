import { getCharacters } from '../services/swapiService'
import { useState, useEffect } from 'react'

export const useCharacterList = () => {
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

  return {
    characters,
    loading,
    error,
    currentPage,
    pageInfo,
    handlePreviousPage,
    handleNextPage,
  }
}
