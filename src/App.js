import './App.css';
import ConnexionPage from './component/ConnexionPage';
import {Routes,Route} from 'react-router-dom'
import AccueilPage from './component/AccueilPage';

function App() {
 
  return (
    <div className="App">
       <Routes>
        <Route  path='/' element={<ConnexionPage />}/>
        <Route path='/accueil' element={<AccueilPage />}/>
       </Routes>
    </div>
  );
}

export default App;
