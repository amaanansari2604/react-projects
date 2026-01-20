import { useState } from "react"


export function Playlists (){

    const [newPlaylist, setNewPlaylist] = useState("");

    const handleCreatePlaylist = () => {

    }


    return <div className="playlists">
        <h2> Playlists</h2>

        {/* create the playlist */}

        <div className="create-playlist">
            <h3>Create New Playlist</h3>
            <div className="playlist-form">
                <input type="text" placeholder="playlist name..." className="playlist-input" onChange={(e) => setNewPlaylist(e.target.value)} value={newPlaylist} />
                <button className="create-btn" onClick={handleCreatePlaylist}>Create Playlist</button>
            </div>
        </div>
    </div>
}