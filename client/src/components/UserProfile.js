function UserProfile (props) {
    return (
        <>
        <span>
            Update User Profile Button
        </span>
        <div>
            <h1>
                Welcome {props.username}
                <br/>
                Bio: {props.bio}
                <br/>
                Playlists: PlaylistContainer for User-created Playlists
            </h1>
        </div>
        </>
    )
}

export default UserProfile;