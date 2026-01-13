import { useMusic } from "../hooks/useMusic"

export function MusicPlayer (){
    const {currentTrack, formatTime, currentTime, duration} = useMusic();
    return (
        <div className="music-player">
            <audio src=""></audio>

            <div className="track-info">
                <h3 className="track-title">{currentTrack.title}</h3>
                <p className="track-artist">{currentTrack.artist}</p>
            </div>

            <div className="progress-container">
                <span className="time">
                    {formatTime(currentTime)}
                </span>
                <input type="range" min={"0"} max={duration || 0} value={currentTime || 0} step={"0.1"} className="progress-bar" style={{}}/>
                <span className="time">
                    {formatTime(duration)}
                </span>
            </div>
        </div>
    )
}