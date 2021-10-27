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
        creator={playlist.user.username}
        current_user_id={props.id}
        id={playlist.user.id}
        playlist_id={playlist.id}
        />
    ))

    return(
        <div>
            <h1>Discover your next playlist here. </h1>
            <h2>Feel free to browse new Playlists here from both our Users and our Admins!</h2>
            {singlePlaylist}
            <iframe width="720" height="405" src="https://www.youtube.com/embed/?listType=playlist&list=PLLGmt3bXA_93pvHgKm7dbEvW410pDFKKl" frameBorder="0" allowFullScreen />
            <iframe width="720" height="405" src="https://www.youtube.com/embed/?listType=playlist&list=PL1VuYyZcPYIJTP3W_x0jq9olXviPQlOe1" frameBorder="0" allowFullScreen />
            <iframe width="720" height="405" src="https://www.youtube.com/embed/?listType=playlist&list=RDCLAK5uy_lGEOjy5U8xV41C8_LyqNnAZKOH6sGyutI" frameBorder="0" allowFullScreen />
        </div>
        )
}
export default Discover