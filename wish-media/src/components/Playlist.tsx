import axios from "axios"
import { useEffect, useState } from "react";
import '../styles/PlaylistStyles.css';

interface Props {
    loggedInUser?: any;
    setLoggedInUser?: (data: any) => void;

}

const Playlist = (props: Props) => {
    const { loggedInUser, setLoggedInUser } = props;



    const [playlists, setPlaylists] = useState<any[]>([])
    const [userId, setUserId] = useState<Number>();
    const [playlistId, setPlaylistId] = useState<Number>()

    async function fetchPlaylists() {
        const userId = loggedInUser.id
        console.log(userId, "user id")
        const baseUrl = "https://wishmedia.herokuapp.com"
        const results = await axios.get(`${baseUrl}/users/${userId}/playlists`)
        console.log(results, "results")
        setPlaylists(results.data)

    }

    async function fetchTracks(playlist_id: number) {

        const baseUrl = "https://wishmedia.herokuapp.com"
        const results = await axios.get(`${baseUrl}/playlist/${playlist_id}`)
        console.log(results, "results")
        setPlaylists(results.data)


    }


    useEffect(() => {
        fetchPlaylists()
    }, [loggedInUser])





    return (
        <>
            <div id="playlist-header">
                <h1>{loggedInUser.username}'s Playlist</h1>
            </div>
            <div id="playlists">
            {
                playlists.map((playlist, index) => {
                    return (
                        <>
                            <div id="playlist-card">
                            <h1>{playlist.playlist_name}</h1>
                            <button onClick={() => fetchTracks(playlist.id)}>View</button>
                            </div>
                        </>

                    )
                })
            }

            </div>
        </>

    )
}

export default Playlist;
