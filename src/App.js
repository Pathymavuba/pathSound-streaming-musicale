import './App.css';
import ConnexionPage from './component/ConnexionPage';
import {Routes,Route} from 'react-router-dom'
import AccueilPage from './component/AccueilPage';
import Album from './component/Album';
import Mainsection from './component/Mainsection';
import Research from './component/Research';
import Playlist from './component/Playlist';
import PlaylistDetails from './component/PlaylistDetails';

function App() {
 
  return (
    <div className="App">
       <Routes>
        <Route  path='/' element={<ConnexionPage />}/>
        <Route path='/accueil' element={<AccueilPage />}>
          <Route path='/accueil/home' element={<Mainsection/>} />
          <Route path='/accueil/search' element={<Research/>} />
          <Route path = '/accueil/playlist' element={<Playlist />} />
          <Route path='/accueil/playlist/playlistdetail' element={<PlaylistDetails />} />
        </Route>

       </Routes>
    </div>
  );
}

export default App;
