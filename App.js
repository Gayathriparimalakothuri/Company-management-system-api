import './App.css';
//import axios from 'axios'
import {Routes,Route} from 'react-router-dom'
import Companylist from './components/companylist';
import Cmpyform  from './components/form';


function App() {
  return (
    <div>
     
      <Routes>
        <Route path ='/' element={<Cmpyform/>}/>
        <Route path ='/companylist' element={ <Companylist/>}/>
      </Routes>
    </div>
  );
}

export default App;
