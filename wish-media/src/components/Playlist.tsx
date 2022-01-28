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
    const [tracks, setTracks] = useState<any[]>([])

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
        setTracks(results.data)



    }



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
                                  
                                    {/* <h1>{playlist.playlist_name}</h1> */}
                                {/* <button onClick={() => fetchTracks(playlist.id)}>View</button> */}
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
                                        {/* <p>{track}</p> */}
                                        <img src={track.track_image_url} alt="track image" />
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
