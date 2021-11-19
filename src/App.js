import react from 'react';
import './App.css';
import { useState } from 'react';
import movies from './movies';
import Movies from './movies';

const PAGE_MOVIES = 'movies';
const PAGE_LIST = 'list';

function App() {
  const [list, setList] = useState ([]);
  const [page, setPage] = useState ('movies');
  const [showSummary, setShowSummary] = useState(false);

  const removeFromList = (movieToRemove) => {
    setList(
      list.filter((movie) => movie !== movieToRemove)
    );
  };

  const addToList = (movie) => {
    setList([...list, {...movie}]);
  };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderList = () => (
    <>
      <h1>Watch List</h1>
      <div className="movies">
        {list.map((movie, idx) => (
          <div className="movie" key={idx}>
            <h3>{movie.name}</h3>
            <img src={movie.image} alt={movies.name}/>
            <h4>{movie.rating}</h4>
            <button onClick={() => removeFromList(movie)}>
              Remove 
            </button>
          </div>
        ))}
      </div>
    </>  
  )

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(PAGE_LIST)}>
          Go to Watchlist ({list.length}) 
        </button>

        <button onClick={() => navigateTo(PAGE_MOVIES)}>
          List Movies
        </button>
      </header>
      {page === PAGE_MOVIES && (
        <Movies addToList={addToList} />
      )}
      {page === PAGE_LIST && renderList()}
    </div>
  );
}

export default App;
