import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './components/LandingPage';
import { fetchFilms } from './services/getFilms'
import HelloWorld from './components/HelloWorld';
import Placeholder from './components/Placeholder';

function App() {
  const [films, setFilms] = useState([]);


    useEffect(() => {
      const fetchFilmData = async () => {
        const resp = await fetchFilms();
        setFilms(resp);
      };
      fetchFilmData();
    }, [])

    // console.log(films);

  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage}/>
        <Route path="/movies" Component={Placeholder} />
      </Routes>
    </Router>
  )
}

export default App
