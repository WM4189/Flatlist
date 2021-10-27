import { useEffect, useState } from "react";
import PlaylistContainer from "./PlaylistContainer";

function DiffProfile (props) {
    const {creator} = props;
    const [allPlaylists, setAllPlaylists] = useState([]);
    const [toggle, setToggle] = useState(true);
    // console.log(playlist)
    console.log(props)
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

    // console.log(allPlaylists)

    const user_playlists = allPlaylists.filter(playlist => playlist.user.id === props.id)

    const current_playlists = user_playlists.map(playlist => (
        <PlaylistContainer 
        creator={playlist.user.username} 
        name={playlist.name}
        current_user_id={props.id}
        id={playlist.user.id}
        playlist_id={playlist.id}
        playlist = {playlist}
        />
    ))

    console.log(user_playlists)
    
    return (
        <>  
        <div>
            <h2> Welcome {props.username} </h2>
                <br/>
            <p> {props.bio} </p>
                <br/>
                <h5> <button> New Playlist </button> </h5>
            <h5> {props.username}'s Playlists: </h5>
            {current_playlists} 
            <h5> {props.username}'s Favorites: </h5>

        </div>
        </>
    )
}

export default DiffProfile