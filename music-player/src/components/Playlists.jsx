import { useState } from "react"
import { useMusic } from "../contexts/MusicContext";


export function Playlists() {

    const [newPlaylist, setNewPlaylist] = useState("");
    const [selectedPlaylist, setSelectedPlaylist] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);

    const { playlists, createPlaylist } = useMusic();

    const handleCreatePlaylist = () => {
        if (newPlaylist.trim()) {
            createPlaylist(newPlaylist.trim())
            setNewPlaylist("");
        }
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

        {/* renders the playlist list */}

        <div className="playlists-list">
            {playlists.length === 0 ? (<p className="empty-message">No Playlists created yet</p>) : (playlists.map((playlist, key) => <div className="playlist-item" key={key}>
                <div className="playlist-header">
                    <h3>{playlist.name}</h3>
                    <div className="playlist-actions">
                        <button className="delete-btn">Delete</button>
                    </div>
                </div>

                {/* add song search */}

                <div className="add-song-section">
                    <div className="search-container">
                        <input type="text" 
                        placeholder="Search songs to add..."
                        value={selectedPlaylist.id === playlist.id ? searchQuery : ""}
                        />
                    </div>
                </div>
            </div>
            ))
            }
        </div>

    </div>
}