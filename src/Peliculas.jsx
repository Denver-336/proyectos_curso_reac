import './style/Peliculas.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

export default function Peliculas () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading, errorFetch } = useMovies({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 500)
    , [getMovies])

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div>
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input
            onChange={handleChange} value={search} placeholder='Avengers, Star Wars, The Matrix...' style={
            {
              width: '40%',
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }
}
          />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main style={{ width: '100%' }}>
        <input type='checkbox' checked={sort} onChange={handleSort} />
        <label>Ordenar por nombre</label>

        {loading ? <p>Cargango...</p> : <Movies movies={movies} error={errorFetch} />}

      </main>
    </div>
  )
}
