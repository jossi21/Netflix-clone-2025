const API_KEY = import.meta.env.VITE_API_KEY; // This is the API key that we will use to make requests to the API

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`, // This is a request to get all the trending movies and TV shows of the week
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`, // This is a request to get all the Netflix Originals
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`, // This is a request to get all the top rated movies
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`, // This is a request to get all the action movies
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, // This is a request to get all the comedy movies
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`, // This is a request to get all the horror movies
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, // This is a request to get all the romance movies
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`, // This is a request to get all the documentaries
}; // This is an object that will contain all the requests that we will make to the API

export default requests; // We export the object so that we can use it in other files
