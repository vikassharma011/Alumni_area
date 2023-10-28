import Login from './components/register/login';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Home from './components/Home/home';
import PrivateRoute from './ProtectedRoutes';
import Profile from './components/profile/Profile';
import CreatePost from './components/create/createpost';
// import AboutMePage from './components/about me/aboutme';
//import { Explore } from '@mui/icons-material';
import Explore from './components/explore/explore';
import Postcreation from './components/explore/postcreation';
import Work from './components/profile/work';
import Contact from './components/profile/contact';
import Followerandall from './components/profile/followerandall';
import UserProfile from './components/profile/userProfile';
import Welcome from './components/Welcome/Welcome';
import Vision from './components/about me/Vision';
import EventCar from './components/even/events';
import ContactForm from './components/contactus/Contactus';
import Chat from './components/Chats/Chats';
import DetailView from './components/Home/blogs/detailview';
import Search from './components/explore/Searchuser';
// import Search from './components/Search/Search';


function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  

  return (
    <div className="App" style={{marginTop:64}}>
   <Routes>
           <Route path='/' element={<Welcome isAuthenticated={isAuthenticated} isUserAuthenticated={isUserAuthenticated} />}/>
           <Route path='/event' element={<EventCar  isAuthenticated={isAuthenticated} />}/>
           <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />}/>
           <Route path='/home' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path='/home' element={<Home />} />
           </Route>
           <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path='/create' element={<CreatePost />} />
           </Route>
          <Route path='/chats' element={<Chat/>}/>
           <Route path='/about' element={<Vision isAuthenticated={isAuthenticated}/>} />
           <Route path='/contact' element={<ContactForm isAuthenticated={isAuthenticated}/>} />
           
           <Route exact path='/profile' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route exact path='/profile' element={<Profile/>} />
          </Route>
          <Route path='/work' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path='/work' element={<Work/>} />
          </Route>
          <Route path='/contactform' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path='/contactform' element={<Contact/>} />
          </Route>
          <Route path='/followerandall' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path='/followerandall' element={<Followerandall/>} />
          </Route>

           <Route path='/explore' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path='/explore' element={<Explore isAuthenticated={isAuthenticated} />} />
            </Route>
         
          <Route path='/createPost' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
           <Route path='/createPost' element={<Postcreation/>} />
          </Route>
          <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element={<DetailView />} />
            </Route>
           <Route path="/profile/:userid" element={<UserProfile />}></Route>
           <Route path='/search' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/search' element={<Search/>} />
            </Route>
        
      </Routes>
    </div>
  );
}

export default App;
