import { useEffect, useRef } from "react";
import { useMusic } from "../hooks/useMusic"

export function MusicPlayer (){
    const {currentTrack, formatTime, currentTime, duration, setDuration, setCurrentTime, nextTrack, prevTrack, play, pause, isPlaying} = useMusic();

    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if(!audio) return;

        if(isPlaying){
            audio.play().catch((err) => console.error(err));
        } else{
            audio.pause()
        }  
    }, [isPlaying])

    useEffect(() => {
        const audio = audioRef.current;

        if(!audio) return;

        const handleLoadedMetadata = () => {
            setDuration(audio.duration)
            console.log(audio.duration)
        }

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime);
        }

        const handleEnder = () => {
            nextTrack()
        }

        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnder);


        return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("ended", handleEnder);


        }
    }, [setDuration, setCurrentTime, currentTrack])
    return (
        <div className="music-player">
            <audio src={currentTrack.url} ref={audioRef} preload="metadata" crossOrigin="anonymous"></audio>

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

            <div className="controls">
                <button className="control-btn" onClick={prevTrack}>⏮</button>
                <button className="control-btn play-btn" onClick={() => isPlaying ? pause() : play()}>  {isPlaying ? "⏸" : "▶"}</button>
                <button className="control-btn" onClick={nextTrack}>⏭</button>
            </div>
        </div>
    )
}