import PlaylistContainer from "./PlaylistContainer"
import {uid} from 'react-uid';

function Discover(props) {
    const {allPlaylists, setAllPlaylists} = props

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
        allPlaylists={allPlaylists}
        setAllPlaylists={setAllPlaylists}
        />
    ))

    return(
        <div>
            <em><h1>Music speaks volumes about your character </h1></em>
            <br/>
            {singlePlaylist}
        </div>
        )
}
export default Discover