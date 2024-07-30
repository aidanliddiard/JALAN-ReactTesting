import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './components/views/LandingPage';
import FilmDetail from './components/views/FilmDetail';
import ShowtimesList from './components/ShowtimesList';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage}/>
        <Route path="/:id" Component={FilmDetail} />
        <Route path="/showtimes" Component={ShowtimesList} />
      </Routes>
    </Router>
  )
}

export default App
