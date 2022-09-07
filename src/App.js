import './App.css';
import Login from './components/Login'
import AdminHome from './components/AdminHome'
import ListProfessionals from './components/ListProfessionals'
import {Routes, Route} from 'react-router-dom'
import FetchApi from './components/API/FetchApi';


function App() {
  return (
    <div className='main-app-div'>

      <FetchApi></FetchApi>
      <Login></Login>

    </div>
  );
}

export default App;
