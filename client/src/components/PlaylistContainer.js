import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useHistory} from "react-router-dom";
import { Switch, Redirect, Route, NavLink } from 'react-router-dom'
import { Header, Icon, Menu } from 'semantic-ui-react'
import UserProfile from "./UserProfile";

function PlaylistContainer (props) {
  // const history = useHistory();
  const { favorite, name, current_user_id, id, playlist, playlist_id} = props;
  const [toggle, setToggle] = useState(true);
  const [selectedUser, setSelectedUser] = useState();
  const [allPlaylists, setAllPlaylists] = useState([]);
  const [ isLiked, setLiked ] = useState(favorite); 
  const [newLikes, setNewLikes] = useState(playlist.likes)
  const [newDisLikes, setNewDisLikes] = useState(playlist.dislikes)

  function incrementLikes () {
    setNewLikes(newLikes + 1)
    updateLike(newLikes, playlist_id)
  }
  function updateLike(newLikes, playlist_id) {
    fetch(`/playlists/${playlist_id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            likes: newLikes
        })
        }).then(resp => resp.json())
          .then(data => console.log(data))
          // console.log("Updated Like"),
          setToggle(!toggle)
      //   )
      };


function incrementDisLikes(){
  setNewDisLikes(newDisLikes + 1)
  updateDisLike(newDisLikes, playlist_id)
}
function updateDisLike(newDisLikes, playlist_id) {
  fetch(`/playlists/${playlist_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          dislikes: newDisLikes
      })
      }).then(resp => resp.json())
        .then(data => console.log(data))
        // console.log("Updated Like"),
        setToggle(!toggle)
    //   )
    }


  const handleDelete = (id) => {
    return fetch(`/playlists/${id}`, {
          method: 'DELETE'
        })
        .then(res => {
          if (res.ok) {
            setAllPlaylists(allPlaylists.filter(playlist => playlist.id !== playlist_id))
            window.location.reload();
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



  return (
    <div className="playlsitTitle">
      <h2>  {playlist.user.username}'s {name}   </h2>
      <h3>
        <span> Likes: {newLikes} </span>
        <span> Dislikes: {newDisLikes} </span>
      <br/>
        <span>
          <button onClick={() => incrementLikes(playlist_id)}> 👍 </button>
          {current_user_id === id?
          <>
          <button onClick={() => handleDelete(playlist_id)}> ❌ </button>
          </>
          :
          <>
          <button onClick={() => handleFavorite(playlist_id)}>{ isLiked ? "❤️" : "♡" }</button>
          </>
          }
          <button onClick={() => incrementDisLikes(playlist_id)}> 👎  </button>
        </span>
        </h3>
        
    
      <div className="framecontainer" >
        <iframe className="iframe" width="720" height="405" src={`https://www.youtube.com/embed/?listType=playlist&list=${playlist.songs}`} frameBorder="0" allowFullScreen />
      </div>
    </div>
  )
}

export default PlaylistContainer


