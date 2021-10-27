import PlaylistContainer from "./PlaylistContainer";
import { useEffect, useState } from "react";
import {uid} from 'react-uid';

function UserProfile (props) {
    const { allPlaylists, setAllPlaylists, id, name, note_id, text, user_id, handleDelete } = props;

        useEffect(() => {
            fetch("/playlists")
              .then(res => res.json())
              .then(allPlaylists => setAllPlaylists(allPlaylists))
          }, [])

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
                <br/>
            <p> {props.bio} </p>
                <br/>
            <h5> <button> New Playlist </button> </h5>
            <div className="user">
            {current_playlists} 
            </div>
            {/* <h5> {props.username}'s Favorites: </h5> */}

        </div>
        </>
    )
}

export default UserProfile;