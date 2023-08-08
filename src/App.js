import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSearchBar from './components/NavBar';
import {musicData} from './Data'
import MusicCard from './components/MusicCard'
import { useState } from 'react';

function RenderData(){
  return musicData.map(music=><MusicCard 
    artist={music.artist} 
    genre={music.genre}  
    albumName={music.albumName} 
    year={music.yearPublished} />)
}

function App() {
  const [keyWord,setKeyWord]=useState("")
  console.log(keyWord)
  return (
    <div className="App">
      <NavSearchBar keyWord={keyWord} setKeyWord={setKeyWord}/>
      <ul>
        <RenderData/>
      </ul>
    </div>
  );
}

export default App;
