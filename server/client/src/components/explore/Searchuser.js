import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Searchuser.css'; // Make sure to import your CSS file
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SchoolIcon from '@mui/icons-material/School';
import Twitter from '@mui/icons-material/Twitter';
import BookIcon from '@mui/icons-material/Book';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(data) {
  const dataarr = data.split('T')[0].split('-');
  const day = dataarr[2];
  const month = dataarr[1];
  const year = dataarr[0];
  return `Joined ${day} ${months[month - 1]} ${year}`;
}

function Search() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  
  const [data,setData] = useState([])
   const navigate = useNavigate();
   
  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/users/${username}`);
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      setUserData(parsedResponse);
    } catch (err) {
      console.log(err);
      alert("User not found");
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("./signup");
    }

    // Fetching all posts
    fetch("/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.log(err));
  }, []);


  const showDark = () => {
    document.documentElement.style.setProperty("--bg-color", "#24292f");
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--box-bg", "#24292f");
    document.documentElement.style.setProperty("--box-radius", "16px");
    document.documentElement.style.setProperty("--dark-mode", "none");
    document.documentElement.style.setProperty("--light-mode", "revert");
    document.documentElement.style.setProperty("--box-shadow", "9px 9px 17px #16191c, -9px -9px 17px #323942");
  }

  const showLight = () => {
    document.documentElement.style.setProperty("--bg-color", "#d0d8dc");
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--box-bg", "#d0d8dc");
    document.documentElement.style.setProperty("--box-radius", "16px");
    document.documentElement.style.setProperty("--light-mode", "none");
    document.documentElement.style.setProperty("--dark-mode", "revert");
    document.documentElement.style.setProperty("--box-shadow", "9px 9px 17px #7d8284, -9px -9px 17px #ffffff");
  }

  return (
    <div className="search-con">
      <main className="search-main">
        <div className="search-title">
          <h1>Search Alumni</h1>
          <div className="search-modes">
            <p className="dark-mode" onClick={showDark}>Dark <DarkModeIcon/></p>
            <p className="light-mode" onClick={showLight}>Light <LightModeIcon/></p>
          </div>
        </div>
        <section className="search-sectionn">
         <SearchIcon/>
          <input className="search-input" type="search" placeholder="Search" onChange={(e) => setUsername(e.target.value)} value={username} />
          <button className="search-btn" type="submit" onClick={fetchUser}>Search</button>
        </section>
        <section className="search-user-details" id="user-details">
          {userData && (
            <div>
              <img className="image" id="user-img" alt="User Icon" src={userData.user.Photo} />
              <div className="search-name">
                <h1 id="name">{userData.user.fullName|| 'Name'}</h1>
                {/* <p id="username">@{userData.login}</p> */}
              </div>
              {/* <div className="joined" id="joined">{formatDate(userData.created_at)}</div> */}
              <div className="para" id="bio">{userData.bio || 'Bio'}</div>
              <div className="stats">
                <div className="repo">
                  <h3>Repo</h3>
                  <h2 id="repo">{userData.public_repos || '0'}</h2>
                </div>
                <div className="Follower">
                  <h3>Follower</h3>
                  <h2 id="follower">{userData.user.followers.length || '0'}</h2>
                </div>
                <div className="Following">
                  <h3>Following</h3>
                  <h2 id="following">{userData.user.following.length || '0'}</h2>
                </div>
              </div>
              <div className="link flex-baseline" >
                <LocationOnIcon/>
                <p id="location">{userData.user.Enter_your_location || 'Location'}</p>
              </div>
              <div className="link flex-baseline">
                <BookIcon/>
                <p id="website">{userData.blog || 'No blogs'}</p>
              </div>
              <div className="twitter flex-baseline">
               <Twitter/>
                <p id="twitter">{userData.twitter_username || 'No twitter'}</p>
              </div>
              <div className="company flex-baseline">
                <SchoolIcon/>
                <p id="company">{userData.user.CollageName || 'No company'}</p>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Search;
