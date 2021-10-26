import './App.css';
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
      <Header as='h2' icon>
				<Icon name='music'/>
				Flatlists
				<Header.Subheader >
				Discover something new.
				</Header.Subheader>
      <nav>
        <span name="header">
          <NavLink to="/profile" style={linkStyles}>Profile</NavLink>
          <NavLink to="/discover" style={linkStyles}>Discover</NavLink>
          <NavLink to="/" style={linkStyles} onClick={handleLogout}>Logout</NavLink>
        </span>
        <br></br>
        <span>Logged in as {currentUser.username} </span>
      </nav>
        <Switch>
          <Route path="/profile">
            <UserProfile username={currentUser.username} bio={currentUser.bio} playlists={currentUser.playlists} />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
        </Switch>
      </Header>
    </div>
  );
}

export default AuthenticatedApp;