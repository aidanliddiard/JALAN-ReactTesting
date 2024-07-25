import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './components/LandingPage';
import Placeholder from './components/Placeholder';
import FilmDetail from './components/views/FilmDetail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage}/>
        <Route path="/movies" Component={Placeholder} />
        <Route path="/movies/:id" Component={FilmDetail} />
      </Routes>
    </Router>
  )
}

export default App
