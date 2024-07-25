import { useEffect, useState } from 'react'
import './App.css'
import { fetchFilms } from './services/getFilms'
import ResultList from './components/ResultList';

function App() {
  const [films, setFilms] = useState([]);


    useEffect(() => {
      const fetchFilmData = async () => {
        const resp = await fetchFilms();
        setFilms(resp);
      };
      fetchFilmData();
    }, [])

    console.log(films);

  return (
    <>
      <ResultList/>
    </>
  )
}

export default App
