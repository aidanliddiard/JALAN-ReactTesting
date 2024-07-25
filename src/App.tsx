import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LandingPage from './components/views/LandingPage';
import FilmDetail from './components/views/FilmDetail';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" Component={LandingPage}/>
        <Route path="/:id" Component={FilmDetail} />
      </Routes>
    </Router>
  )
}

export default App
