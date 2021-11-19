import react from "react"
import { useState } from "react";


export default function Movies ({addToList}) {
  const [movies] = useState([
    {
      name: 'Beauty and The Beast',
      image: 'https://4.bp.blogspot.com/-P4esc1UWEiM/WCXBh0gHiYI/AAAAAAAAMXo/HVEb4Y-k3yM0rhguExMfMY6YQKJt5dxtACLcB/s1600/beauty%2Band%2Bthe%2Bbeast%2Bposter%2B-%2Bnamafilm.jpg',
      rating: '8.0 / 10',
      overview: "A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman's love."
    },
    {
      name: 'The Lion King',
      image: 'https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg',
      rating: '8.5 / 10',
      overview: "Lion prince, Simba, and his father are targeted by his bitter uncle, who wants to ascend the throne himself."
    },
    {
      name: 'The Little Mermaid',
      image: 'https://www.themoviedb.org/t/p/w500/9nJ9rm6RwYgIggnGVy8Dej4olef.jpg',
      rating: '7.6 / 10',
      overview: "A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince's love."
    },
    {
      name: 'Moana',
      image: 'https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/7853/727853-v',
      rating: '7.6 / 10',
      overview: 'In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches island where Moana live, she answers the call from Ocean to seek out the Demigod to set things right.'
    },
    {
      name: 'Pinocchio',
      image: 'https://m.media-amazon.com/images/M/MV5BMTU4Mzk3ODIyOF5BMl5BanBnXkFtZTgwODgyNzk2NjE@._V1_.jpg',
      rating: '7.4 / 10',
      overview: 'A living puppet, with the help of a cricket as his conscience, must prove himself worthy to become a real boy.'
    },
    {
      name: 'Aladdin',
      image: 'https://i.ebayimg.com/images/g/5boAAOSwC71ctfDb/s-l640.jpg',
      rating: '8.0 / 10',
      overview: 'A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.'
    },
    {
      name: 'Frozen',
      image: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_.jpg',
      rating: '7.4 / 10',
      overview: 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.'
    },
    {
      name: 'Hercules',
      image: 'https://lumiere-a.akamaihd.net/v1/images/p_hercules_19870_e316619f.jpeg',
      rating: '7.3 / 10',
      overview: 'The son of Zeus and Hera is stripped of his immortality as an infant and must become a true hero in order to reclaim it.'
    },
  ]);

  return (
    <>
      <h1>Disney Movies</h1>
      <div className="movies">
        {movies.map((movie, idx) => (
          <div className="movie" key={idx}>
            <h4>{movie.name}</h4>
            <img src={movie.image} alt={movies.name}/>
            <h5>{movie.rating}</h5>
            <button onClick={() => addToList(movie)}>
              Add to Watchlist
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
