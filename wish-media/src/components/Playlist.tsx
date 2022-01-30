import axios from "axios"
import { useEffect, useState } from "react";
import '../styles/PlaylistStyles.css';

interface Props {
    loggedInUser?: any;


}

const Playlist = (props: Props) => {
    const { loggedInUser} = props;



    const [playlists, setPlaylists] = useState<any[]>([])
    const [tracks, setTracks] = useState<any[]>([])

    const fetchPlaylists = async () => {
        const userId = loggedInUser.id
        console.log(userId, "user id")
        const baseUrl = "https://wishmedia.herokuapp.com"
        const results = await axios.get(`${baseUrl}/users/${userId}/playlists`)
        console.log(results, "results")
        setPlaylists(results.data)

    }

    const fetchTracks = async (playlist_id: number) => {

        const baseUrl = "https://wishmedia.herokuapp.com"
        const results = await axios.get(`${baseUrl}/playlist/${playlist_id}`)
        console.log(results, "results")
        setTracks(results.data)

    }

    // const deleteTrack = async (playlist_id: number, track_id: number) => {
    //     const baseUrl = "https://wishmedia.herokuapp.com"
    //     const results = await axios.delete(`${baseUrl}/playlist/${playlist_id}/${track_id}`)
    //     console.log(results, "results with deleted track")
    //     setTracks(results.data)

    // }


    useEffect(() => {
        fetchPlaylists()
    }, [loggedInUser])





    return (
        <>
            <div id="playlist-header">
                <h1>{loggedInUser.username}'s Playlists</h1>
            </div>
            <div id="contain">
                <div id="playlists">

                    {
                        playlists.map((playlist, index) => {
                            return (
                                <>
                                    <div id="playlist-card" onClick={() => fetchTracks(playlist.id)}>
                                        {playlist.playlist_name}


                                    </div>

                                </>

                            )
                        })
                    }
                </div>
                <div id="tracklist">

                    {
                        tracks.map((track, index) => {
                            
                            return (
                                <>
                                    <div id="track-card">
                                        <div id="track-info">
                                            <h3>{track.artist_name}</h3>
                                            <img src={track.track_image_url} alt="track" />
                                            <p>{track.track_name}</p>
                                           
                                            
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>

    )
}

export default Playlist;
