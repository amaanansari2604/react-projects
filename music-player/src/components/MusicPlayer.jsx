import { useMusic } from "../hooks/useMusic"

export function MusicPlayer (){
    const {currentTrack} = useMusic();
    return (
        <div className="music-player">
            <audio src=""></audio>

            <div className="track-info">
                <h3 className="track-title">{currentTrack.title}</h3>
                <p className="track-artist">{currentTrack.artist}</p>
            </div>

            <div className="progress-container">
                <span className="time">
                    
                </span>
            </div>
        </div>
    )
}