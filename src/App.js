import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSearchBar from './components/NavBar';
import {musicData} from './Data'
import MusicCard from './components/MusicCard'

function RenderData(){
  return musicData.map(music=><MusicCard 
    artist={music.artist} 
    genre={music.genre}  
    albumName={music.albumName} 
    year={music.yearPublished} />)
}

function App() {
  
  return (
    <div className="App">
      <NavSearchBar/>
      <ul>
        <RenderData/>
      </ul>
    </div>
  );
}

export default App;
