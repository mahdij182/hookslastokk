import logo from './logo.svg';
import './App.css';
import {movies} from './components/movies'
import {useState} from 'react'
import MovieList from './components/MoviesList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';


function App() {

  const [ moviListe, setmoviListe ] = useState(movies);

  const addHandler=(newMovie)=>{
    setmoviListe (
    [...moviListe,newMovie]
    )
  }
 
  const [search, setsearch] = useState('')

  return (
    <div className="App">
      <Navbar/>
      <Filter setsearch={setsearch}/>
      <AddMovie addHandler={addHandler} />
      <MovieList moviListe={moviListe} search={search} />
    </div>
  );
}

export default App;
