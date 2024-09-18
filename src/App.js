import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Carasole from './components/Carasole';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carasole/>
      <MovieDetails />
    </div>
  );
}

export default App;
