import { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";

function PlaylistContainer(props) {
  const { creator, name, current_user_id, id, playlist_id} = props;
  const [toggle, setToggle] = useState(true);
  // let history = useHistory();

  function handleDelete(id) {
		fetch(`http://localhost:4000/playlists/${id}`, {
			method: "DELETE",
		})
		.then((resp) => resp.json())
		.then
    (setToggle(!toggle));
	}


  return (
    <div>
      <h2> Title: {name}
      <br/>
        <span>
          {current_user_id == id?
          <>
          <button> Update Playlist </button>
          <button onClick={() => handleDelete(playlist_id)}> Delete Playlist </button>
          </>
          :
          <>
          <button>Favorite Playlist</button>
          <button> {creator}'s Profile </button>
          </>
          }
        </span>
      </h2>

      <iframe width="720" height="405" src="https://www.youtube.com/embed/?listType=playlist&list=PLLGmt3bXA_93pvHgKm7dbEvW410pDFKKl" frameBorder="0" allowFullScreen />

    </div>
  )
}

export default PlaylistContainer