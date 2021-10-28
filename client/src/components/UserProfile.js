import PlaylistContainer from "./PlaylistContainer";
import { useEffect, useState } from "react";
import {uid} from 'react-uid';

function UserProfile (props) {
    const { allPlaylists, setAllPlaylists, id, name, note_id, text, user_id, handleDelete } = props;
    const [playlistData, setPlaylist] = useState([])
    const [playlistName, setName] = useState([])

        useEffect(() => {
            fetch("/playlists")
              .then(res => res.json())
              .then(allPlaylists => setAllPlaylists(allPlaylists))
          }, [setAllPlaylists])

        //   (:name, :songs, :favorite, :user_id, :likes, :dislikes)
  const handleSubmit = () => {
    return fetch("/playlists", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
             "name": playlistName, 
              "songs": playlistData, 
              "user_id": props.id
            })
    })
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return res.json().then(errors => Promise.reject(errors))
        }
      })
      .then(playlist => {
        setPlaylist(playlist)
      })
  }

    const user_playlists = allPlaylists.filter(playlist => playlist.user.id === props.id)

    const current_playlists = user_playlists.map(playlist => (
        <PlaylistContainer
        key={uid(playlist)}  
        creator={playlist.user.username} 
        name={playlist.name}
        current_user_id={props.id}
        id={playlist.user.id}
        playlist_id={playlist.id}
        playlist = {playlist}
        />
    ))
    
    return (
        <>  
        <div>
            <h2> Welcome </h2>
                {/* <br/> */}
            <p> {props.bio} </p>
                <br/>
            {/* <h5> <button> New Playlist </button> </h5> */}
            <form onSubmit={handleSubmit}>
      {/* <h1>New Playlist</h1> */}
      <p>
        <em><label htmlFor="New Playlist">Input Playlist ID</label></em>
        <input
          type="text"
          value={playlistData}
          onChange={(e) => setPlaylist(e.target.value)}
          name="New Playlist"
        />
        <em><label htmlFor="New Playlist Name">Input Playlist Name</label></em>
        <input
          type="text"
          value={playlistName}
          onChange={(e) => setName(e.target.value)}
          name="New Playlist"
        />
      </p>
      {" "}<button type="submit">Create New Playlist</button>
      <br />
      <br />
      <br />
      <br />
    </form>
            <div className="user">
            {current_playlists} 
            </div>
            {/* <h5> {props.username}'s Favorites: </h5> */}

        </div>
        </>
    )
}

export default UserProfile;