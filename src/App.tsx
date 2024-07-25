import { useEffect, useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage';

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
      <LandingPage/>
    </>
  )
}

export default App
