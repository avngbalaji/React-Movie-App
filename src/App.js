import { useRef, useState } from 'react';
import './App.css';

function App() {

  let searchMovie = useRef();
  let api = "https://www.omdbapi.com/?apikey=1d4cd93e&t=";

  let [title, setTitle] = useState('');
  let [year, setYear] = useState('');
  let [genre, setGenre] = useState('');
  let [plot, setPlot] = useState('');
  let [actors, setActors] = useState('');
  let [director, setDirector] = useState('');
  let [BoxOffice, setBoxOffice] = useState('');
  let [released, setReleased] = useState('');
  let [runtime, setRuntime] = useState('');
  let [awards, setAwards] = useState('');
  let [imbdRating, setImdbrating] = useState('');
  let [poster, setPoster] = useState('');

  let [loader, setLoader] = useState(false);
  let [moviecontainer, setMoviecontainer] = useState(false);

  function SearchMovieHandler(event){
    event.preventDefault();
    let movie = searchMovie.current.value;
    console.log(movie);

    let keyword = api + movie;
    console.log(keyword);

    setLoader(true)
    setMoviecontainer(false)

    fetch(keyword)
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data)
      console.log(data.Title);
      console.log(data.Year);
      console.log(data.Genre);
      console.log(data.Plot);
      console.log(data.Actors);
      console.log(data.Director);
      console.log(data.BoxOffice);
      console.log(data.Released);
      console.log(data.Runtime);
      console.log(data.Awards);
      console.log(data.imdbRating);
      console.log(data.Poster);
      
      setTitle(data.Title);
      setYear(data.Year);
      setGenre(data.Genre);
      setPlot(data.Plot);
      setActors(data.Actors);
      setDirector(data.Director);
      setBoxOffice(data.BoxOffice);
      setReleased(data.Released);
      setRuntime(data.Runtime);
      setAwards(data.Awards);
      setImdbrating(data.imdbRating);
      setPoster(data.Poster);

      setLoader(false);
      setMoviecontainer(true);
    })
  }

  return (
    <div className="App">
      <div className='home'>
        <div className='home-content'>
          <div className='home-content-titles'>
              <h1>Unlimited movies, TV <br /> shows and more.</h1>
              <p>Know more about the<br/> films you love with our app.</p>
          </div>
          <div className='home-content-input'>
              <input type='text' placeholder='Enter Movie Name' ref={searchMovie} />
              <input type='button' value='Search Movie' onClick={SearchMovieHandler} />
          </div>
          <div className={loader === true ? "loader" : ""}></div>
        </div>
      </div>
      <div className={moviecontainer === true ? "movie-container" : "d-none"}>
        <div className={title !== undefined ? "content" : "d-none"}>
          <h1 className='title'>{title}</h1>
          <p className='small'>{year}, {genre}</p>
          <p className='plot'>Plot: {plot}</p>
          <p className='actors'>Actors: {actors}</p>
          <p className='director'>Director: {director}</p>
          <p className='earnings'>Box Office: {BoxOffice}</p>
          <p className='released'>Released: {released}</p>
          <p className='runtime'>Runtime: {runtime}</p>
          <p className='awards'>Awards: {awards}</p>
          <p className='ratings'>IMDB Rating: {imbdRating}</p>
        </div>
        <div className={title === undefined ? "content ac nd" : "d-none"}>We're sorry🙇🏻, but we could not find any movies with that title🎥. <br /> Please verify the spelling and try again!🫡.</div>
        <img src={poster} alt={title}/>
      </div>
    </div>
  );
}

export default App;
