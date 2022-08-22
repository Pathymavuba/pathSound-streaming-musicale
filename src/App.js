import './App.css';
import ConnexionPage from './component/ConnexionPage';
import {Routes,Route} from 'react-router-dom'
import AccueilPage from './component/AccueilPage';
import Album from './component/Album';

function App() {
 
  return (
    <div className="App">
       <Routes>
        <Route  path='/' element={<ConnexionPage />}/>
        <Route path='/accueil' element={<AccueilPage />}/>
        {/* <Route path='/accueil/album' element={<Album/>} /> */}
       </Routes>
    </div>
  );
}

export default App;
