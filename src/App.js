import './styles/App.css';
import ConnexionPage from './components/ConnexionPage';
import {Routes,Route} from 'react-router-dom'
import AccueilPage from './components/AccueilPage';
import Mainsection from './components/Mainsection';
import Research from './components/Research';
import Playlist from './components/Playlist';
import PlaylistDetails from './components/PlaylistDetails';

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
