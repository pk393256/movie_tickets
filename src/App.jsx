import './App.css';
import { Login } from './Components/Login'
import {Routes,Route} from "react-router-dom";
import { Home} from './Components/Home';
import {Navbar} from './Components/Navbar';
import {Movie} from './Components/Movie'
import { Bookings } from './Components/Bookings';
// import { Navbar } from './Components/Navbar';
// 

function App() {
  
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/:id'   element={<Movie />}></Route>
          <Route path='/bookings' element={<Bookings />}></Route>
        </Routes>
    </div>
  );
}

export default App;
