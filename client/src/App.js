import Login from './components/register/login';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home/home';
import PrivateRoute from './ProtectedRoutes';
import Profile from './components/profile/Profile';
import CreatePost from './components/create/createpost';
import AboutMePage from './components/about me/aboutme';
//import { Explore } from '@mui/icons-material';
import Explore from './components/explore/explore';


function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  

  return (
    <div className="App" style={{marginTop:64}}>
   <Routes>
           <Route path='/' element={<Login isUserAuthenticated={isUserAuthenticated} />}/>
           <Route path='/home' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path='/home' element={<Home />} />
           </Route>
           <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path='/create' element={<CreatePost />} />
           </Route>
           <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path='/about' element={<AboutMePage />} />
           </Route>
           <Route path='/profile' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path='/profile' element={<Profile/>} />
           </Route>
           <Route path='/explore' element={<Explore/>}/> 
        
      </Routes>
    </div>
  );
}

export default App;
