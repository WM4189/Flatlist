import PlaylistContainer from "./PlaylistContainer"
import { useEffect, useState } from "react";

function Discover() {
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

    return(
        <div>
            <h1>You have hit the Discover Page </h1>
            <h2>Feel free to browse new Playlists here from both our Users and our Admins!</h2>
            <h3>Playlists: </h3>

        </div>
        )
}
export default Discover