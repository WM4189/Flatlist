import PlaylistContainer from "./PlaylistContainer"
import {uid} from 'react-uid';
import { useEffect, useState } from "react";

function Discover(props) {
    const {allPlaylists, setAllPlaylists} = props
    // const [toggle, setToggle] = useState(true);

    useEffect(() => {
        fetch("/playlists")
          .then(res => res.json())
          .then(allPlaylists => setAllPlaylists(allPlaylists))
      },[setAllPlaylists])

    console.log(allPlaylists)

    const singlePlaylist = allPlaylists.map((playlist) => (
        <PlaylistContainer
        key={uid(playlist)} 
        name={playlist.name} 
        songs={playlist.song} 
        favorite={playlist.favorite} 
        current_user_id={props.id}
        id={playlist.user.id}
        playlist_id={playlist.id}
        playlist = {playlist}
        />
    ))

    return(
        <div>
              {/* <h1>Discover your next playlist here</h1>
            <h2>Feel free to browse new Playlists here from both our Users and our Admins!</h2> */}
            <em><h1>Music speaks volumes about your character </h1></em>
            <br/>
            {singlePlaylist}
        </div>
        )
}
export default Discover