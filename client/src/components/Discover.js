import PlaylistContainer from "./PlaylistContainer"

import { useEffect, useState } from "react";

function Discover(props) {
    const [allPlaylists, setAllPlaylists] = useState([]);
    const [toggle, setToggle] = useState(true);
    
    
    function fetching() {
        fetch("http://localhost:3000/playlists", {
            headers: {
            "Content-Type": "application/json",
            credentials: 'include'
            },
        })  .then((r) => r.json())
			.then((data) => {
				setAllPlaylists(data)
			})}
        useEffect(() => {
            console.log("Re-Running...");
            fetching();
        }, [!toggle]);

    console.log(allPlaylists)

    const singlePlaylist = allPlaylists.map((playlist) => (
        <PlaylistContainer 
        name={playlist.name} 
        songs={playlist.song} 
        favorite={playlist.favorite} 
        current_user_id={props.id}
        id={playlist.user.id}
        playlist_id={playlist.id}
        playlist = {playlist}
        creator_username={playlist.user.username}
        creator_id={playlist.user.id}
        creator_bio={playlist.user.bio}
        // creator_playlists={}
        />
    ))

    return(
        <div>
            <h1>Discover your next playlist here. </h1>
            <h2>Feel free to browse new Playlists here from both our Users and our Admins!</h2>
            {singlePlaylist}
        </div>
        )
}
export default Discover