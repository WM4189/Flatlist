import './App.css';
import PlaylistContainer from './components/PlaylistContainer'
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'

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
      <nav>
        <span>
          <NavLink to="/playlists">Playlists</NavLink>{" - "}
          
        </span>
        <span>Logged in as {currentUser.username} <button onClick={handleLogout}>Logout</button></span>
      </nav>
      <Switch>
        <Route path="/playlists">
          <PlaylistContainer currentUser={currentUser} />
        </Route>
        <Redirect to="/playlists" />
      </Switch>
    </div>
  );
}

export default AuthenticatedApp;