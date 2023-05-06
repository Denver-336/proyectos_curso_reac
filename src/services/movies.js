export async function searchMovies ({ search }) {
  if (search === '') return null
  try {
    const response = await fetch(`${import.meta.env.VITE_API_MOVIE_URL}${search}`)
    const json = await response.json()

    if (json.Error) {
      // console.log(json.Error)
      throw new Error(json.Error)
    }

    if (json.Search) {
      const movies = json.Search

      return movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
        poster: movie.Poster
      }))
    }
  } catch (error) {
    // console.log(error.message)
    throw new Error(error.message)
  }
}
