import {uid} from 'react-uid';
import { useState } from "react";
// import { useHistory} from "react-router-dom";


function PlaylistContainer (props) {
  // const history = useHistory();
  const {allPlaylists, setAllPlaylists, favorite, name, current_user_id, id, playlist, playlist_id} = props;
  const [toggle, setToggle] = useState(true);
  const [ isLiked, setLiked ] = useState(favorite); 

    function incrementLikes(id) {
    const likess = ++playlist.likes
    fetch(`/playlists/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            likes: likess
        })
        }).then(resp => resp.json())
          .then(data => console.log(data.likes))
          setToggle(!toggle)
      };

function incrementDisLikes(id) {
  const dislike = ++playlist.dislikes
  fetch(`/playlists/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          dislikes: dislike
      })
      }).then(resp => resp.json())
        .then(data => console.log(data.dislikes))
        setToggle(!toggle)
    }

  const handleDelete = (id) => {
    return fetch(`/playlists/${id}`, {
          method: 'DELETE'
        }).then(setAllPlaylists(allPlaylists.filter(playlist => playlist.id !== playlist_id)))}

function handleFavorite(id) {
  setLiked(!isLiked)
  let likedd = !isLiked
  fetch(`/playlists/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"favorite": likedd})
  })
}

  return (
    <div className="playlsitTitle">
      <h2>  {playlist.user.username}'s {name}   </h2>
      <h3>
        <span> Likes: {playlist.likes} </span>
        <span> Dislikes: {playlist.dislikes} </span>
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
        <iframe title={uid(playlist)} className="iframe" width="720" height="405" src={`https://www.youtube.com/embed/?listType=playlist&list=${playlist.songs}`} frameBorder="0" allowFullScreen />
      </div>
    </div>
  )
}

export default PlaylistContainer