import './App.css';
import { useEffect, useState } from "react";
import UserProfile from './components/UserProfile';
import Discover from './components/Discover';
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'
import { Header, Icon, Menu } from 'semantic-ui-react'


const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "5px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white"
};


function AuthenticatedApp({ currentUser, setCurrentUser }) {

  const [allPlaylists, setAllPlaylists] = useState([]);

  const handleLogout = () => {
    fetch(`/logout`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setCurrentUser(null)
        }
      })
  }
  
  return (
    <div className="App">

      <Header as='h5'icon>
				<Icon id="icon" name='music'/>
				Flatlists
				<Header.Subheader >
				Discover Something New
				</Header.Subheader>
        <br/>
      <nav>
        <span name="header">
          <NavLink to="/profile" style={linkStyles}>Profile</NavLink>
          <NavLink to="/discover" style={linkStyles}>Discover</NavLink>
          <NavLink to="/" style={linkStyles} onClick={handleLogout}>Logout</NavLink>
        </span>
        <br/>
        <span>Logged in as {currentUser.email} </span>
      </nav>
      </Header>
      <Switch>
          <Route path="/profile">
            <UserProfile setAllPlaylists={setAllPlaylists} allPlaylists={allPlaylists} username={currentUser.username} bio={currentUser.bio} playlists={currentUser.playlists} id={currentUser.id} />
          </Route>
          <Route path="/discover">
            <Discover setAllPlaylists={setAllPlaylists} allPlaylists={allPlaylists} currentUser={currentUser} id={currentUser.id} />
          </Route>
      </Switch>

    </div>
  );
}

export default AuthenticatedApp;