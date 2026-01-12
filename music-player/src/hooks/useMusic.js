import { useState } from "react"

const songs = [
    {
        id:1,
        title: "Barbaad Saiyaara",
        artist: "Juibin Nautiyal",
        url: "/songs/barbaad.mp3"
    },
    {
        id:2,
        title: "bas ek dhadak",
        artist: "arijit singh",
        url: "/songs/bas-ek-dhadak.mp3"
    },
    {
        id:3,
        title: "Dhun Saiyaara",
        artist: "Arijit singh",
        url: "/songs/dhun.mp3"
    },
    {
        id:4,
        title: "Dhurandhar Title Track",
        artist: "Hanumankind",
        url: "/songs/dhurandhar.mp3"
    },
    {
        id:5,
        title: "Dil Ke Taj Mahal",
        artist: "Himesh Reshammiya",
        url: "/songs/dil-ke-taj-mahal.mp3"
    },
    {
        id:6,
        title: "Duniya alag",
        artist: "Arijit Singh",
        url: "/songs/duniya-alag.mp3"
    },
    {
        id:7,
        title: "Humsafar Saiyaara",
        artist: "Sachet Tandon",
        url: "/songs/humsafar-saiyara.mp3"
    },
    {
        id:8,
        title: "Lutt Le Gaya",
        artist: "a girl",
        url: "/songs/lutt-let-gya.mp3"
    },
    {
        id:9,
        title: "Pardesiya",
        artist: "sonu nigam",
        url: "/songs/pardesiya.mp3"
    },
    {
        id:10,
        title: "Run down the city",
        artist: "a boy",
        url: "/songs/run-down-the-city.mp3"
    },
    {
        id:11,
        title: "Saiyaara Title Track",
        artist: "Faheem abdullah",
        url: "/songs/saiyaara.mp3"
    },
    {
        id:12,
        title: "Tum Ho Toh Saiyaara",
        artist: "vishal mishra",
        url: "/songs/tum-ho-to.mp3"
    }
]

export const useMusic = () => {
    const [allSongs, setAllSongs] = useState([])
}