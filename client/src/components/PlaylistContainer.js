import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import DiffProfile from "./DiffProfile";
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'
import { Header, Icon, Menu } from 'semantic-ui-react'
import UserProfile from "./UserProfile";

const PlaylistContainer = (props) => {
  // const history = useHistory();
  const { creator, name, current_user_id, creator_id, creator_bio, creator_username, id, playlist, playlist_id} = props;
  const [toggle, setToggle] = useState(true);
  const [selectedUser, setSelectedUser] = useState();
  const [allPlaylists, setAllPlaylists] = useState([]);


  // function handleDelete(id) {
	// 	fetch(`http://localhost:4000/playlists/${id}`, {
	// 		method: "DELETE",
	// 	})
	// 	.then((resp) => resp.json())
	// 	.then
  //   (setToggle(!toggle));
	// }

  const handleDelete = (id) => {
    return fetch(`/playlists/${id}`, {
          method: 'DELETE'
        })
        .then(res => {
          if (res.ok) {
            setAllPlaylists(allPlaylists.filter(playlist => playlist.id !== playlist_id))
            // window.location.reload();
            // history.push('/')
          }
        })
  }

function handleFavorite(id) {
  console.log(playlist.songs)
}

function routeToProfile(id) {

  console.log(creator)
  // history.push('/profile')
  // <DiffProfile  />
  
// useEffect(() => {         
//   fetch(`/users/${id}`)           
//   .then(res => res.json())           
//   .then(selectedUser => setSelectedUser(selectedUser))       
// }, [])
} 

{/* <DiffProfile/> */}


  return (
    <div>
      <h2>  {name}
      <br/>
        <span>
          {current_user_id === id?
          <>
          {/* <button> Update Playlist </button> */}
          <button onClick={() => handleDelete(playlist_id)}> Delete Playlist </button>
          </>
          :
          <>
          <button onClick={() => handleFavorite(playlist_id)}>Favorite Playlist</button>
          <button onClick={ () => {
              routeToProfile(creator_id) 
      
            // <UserProfile username={creator.username} bio={creator.bio} playlists={creator.playlists} id={creator.id}/>
          }}> {creator_username}'s Profile </button>
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