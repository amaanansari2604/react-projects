import { useState } from "react"

const songs = [
    {
        id: 1,
        title: "Barbaad Saiyaara",
        artist: "Juibin Nautiyal",
        url: "/songs/barbaad.mp3",
        duration: "03:45"
    },
    {
        id: 2,
        title: "bas ek dhadak",
        artist: "arijit singh",
        url: "/songs/bas-ek-dhadak.mp3",
        duration: "04:45"

    },
    {
        id: 3,
        title: "Dhun Saiyaara",
        artist: "Arijit singh",
        url: "/songs/dhun.mp3",
        duration: "03:20"

    },
    {
        id: 4,
        title: "Dhurandhar Title Track",
        artist: "Hanumankind",
        url: "/songs/dhurandhar.mp3",
        duration: "03:45"
    },
    {
        id: 5,
        title: "Dil Ke Taj Mahal",
        artist: "Himesh Reshammiya",
        url: "/songs/dil-ke-taj-mahal.mp3"
    },
    {
        id: 6,
        title: "Duniya alag",
        artist: "Arijit Singh",
        url: "/songs/duniya-alag.mp3"
    },
    {
        id: 7,
        title: "Humsafar Saiyaara",
        artist: "Sachet Tandon",
        url: "/songs/humsafar-saiyara.mp3"
    },
    {
        id: 8,
        title: "Lutt Le Gaya",
        artist: "a girl",
        url: "/songs/lutt-let-gya.mp3",
        duration: "03:45"

    },
    {
        id: 9,
        title: "Pardesiya",
        artist: "sonu nigam",
        url: "/songs/pardesiya.mp3",
        duration: "03:45"

    },
    {
        id: 10,
        title: "Run down the city",
        artist: "a boy",
        url: "/songs/run-down-the-city.mp3",
        duration: "03:45"

    },
    {
        id: 11,
        title: "Saiyaara Title Track",
        artist: "Faheem abdullah",
        url: "/songs/saiyaara.mp3",
        duration: "03:45"

    },
    {
        id: 12,
        title: "Tum Ho Toh Saiyaara",
        artist: "vishal mishra",
        url: "/songs/tum-ho-to.mp3",
        duration: "03:45"

    }
]

export const useMusic = () => {
    const [allSongs, setAllSongs] = useState(songs);
    const [currentTrack, setCurrentTrack] = useState(songs[0]);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0);


    const handlePlaySong = (song, index) => {
        setCurrentTrack(song)
        setCurrentTrackIndex(index)
    }

    const nextTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = (prev + 1) % allSongs.length;
            setCurrentTrack(allSongs[nextIndex])
            return nextIndex
        });
        setIsPlaying(false);
    }

    const prevTrack = () => {
        setCurrentTrackIndex((prev) => {
            const nextIndex = prev===0 ? allSongs.length - 1 : prev - 1;
            setCurrentTrack(allSongs[nextIndex])
            return nextIndex
        });
        setIsPlaying(false);

    }

    const formatTime = (time) => {
        if (isNaN(time)) return "00:00";

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${seconds.toString().padStart(2, "0")}`
    }

    const play = () => setIsPlaying(true);
    const pause = () => setIsPlaying(false);

    

    return { allSongs, handlePlaySong, currentTrackIndex, currentTrack, currentTime, formatTime, duration, setDuration, setCurrentTime, nextTrack, prevTrack, play, pause, isPlaying, volume, setVolume};
}