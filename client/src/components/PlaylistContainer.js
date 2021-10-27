import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useHistory} from "react-router-dom";
import DiffProfile from "./DiffProfile";
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'
import { Header, Icon, Menu } from 'semantic-ui-react'
import UserProfile from "./UserProfile";

function PlaylistContainer (props) {
  // const history = useHistory();
  const { favorite, creator, name, current_user_id, creator_id, creator_bio, creator_username, id, playlist, playlist_id} = props;
  const [toggle, setToggle] = useState(true);
  const [selectedUser, setSelectedUser] = useState();
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [ isLiked, setLiked ] = useState(favorite); 

  const handleDelete = (id) => {
    return fetch(`/playlists/${id}`, {
          method: 'DELETE'
        })
        .then(res => {
          if (res.ok) {
            setAllPlaylists(allPlaylists.filter(playlist => playlist.id !== playlist_id))
            window.location.reload();
            // history.push('/')
          }
        })
  }

function handleFavorite(id) {
  setLiked(isLiked => !isLiked)
  fetch(`/playlists/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"favorite": isLiked})
  })
  .then(res => res.json())
  .then(data =>{ 
    console.log(data)
  })
}


console.log(creator)


function routeToProfile() {
  <DiffProfile
   creator={creator}
  />
}




  return (
    <div>
      <h2>  {name}
      <br/>
        <span>
          {current_user_id === id?
          <>
          <button onClick={() => handleDelete(playlist_id)}> Delete Playlist </button>
          </>
          :
          <>
          <button onClick={() => handleFavorite(playlist_id)}>{ isLiked ? "❤️" : "♡" }</button>

          <Link to="/diffprofile">
          <button onClick={ () => {
              routeToProfile() 
            // <UserProfile username={creator.username} bio={creator.bio} playlists={creator.playlists} id={creator.id}/>
          }}> {creator_username}'s Profile </button>
          </Link>
          </>
          }
        </span>
      </h2>
      <div className="framecontainer" >
        <iframe className="iframe" width="720" height="405" src={`https://www.youtube.com/embed/?listType=playlist&list=${playlist.songs}`} frameBorder="0" allowFullScreen />
      </div>
    </div>
  )
}

export default PlaylistContainer