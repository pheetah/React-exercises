import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

function App() {

  const [imdbFilms, setImbdFilms] = useState([]);

  useEffect(() =>{

    let params = {q: 'game of thr'};

    axios.get('https://imdb8.p.rapidapi.com/auto-complete',
      {
        params: params,
        headers: {
          'x-rapidapi-key': '90c2e39d65msh0b7d914f1a20a7dp1d42aejsn5689990ba931',
          'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
      }
    )
    .then(filmsResponse => {
        setImbdFilms(filmsResponse.data.d);
        console.log(filmsResponse);
    });
  }, [])

  return (
    <ul>
      {imdbFilms.map(film => <li>{film.l}</li>)}
    </ul>
  );
}

export default App;
