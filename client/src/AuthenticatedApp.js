import './App.css';
import PlaylistContainer from './components/PlaylistContainer'
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'
import { Header, Icon } from 'semantic-ui-react'

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
				FlatLists
				{/* <Header.Subheader >
				Music
				</Header.Subheader> */}
      <nav>
        <span>
          <NavLink to="/profile" style={linkStyles}>Profile</NavLink>
          <NavLink to="/discover" style={linkStyles}>Discover</NavLink>
        </span>
        <br></br>
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>
        <Route path="/profile">
          <PlaylistContainer currentUser={currentUser} />
        </Route>
        {/* <Redirect to="/discover" /> */}
      </Switch>
      </Header>
    </div>
  );
}

export default AuthenticatedApp;