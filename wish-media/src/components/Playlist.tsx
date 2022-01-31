import axios from "axios"
import { useEffect, useState } from "react";
import '../styles/PlaylistStyles.css';

interface Props {
    loggedInUser?: any;


}

const Playlist = (props: Props) => {
    const { loggedInUser } = props;



    const [playlists, setPlaylists] = useState<any[]>([])
    const [tracks, setTracks] = useState<any[]>([])

    const [selectedPlaylist, setSelectedPlaylist] = useState<number | null>(null)

    const fetchPlaylists = async () => {
        const userId = loggedInUser.id
        console.log(userId, "user id")
        const baseUrl = "https://wishmedia.herokuapp.com"
        const results = await axios.get(`${baseUrl}/users/${userId}/playlists`)
        console.log(results, "results")
        setPlaylists(results.data)

    }

    const fetchTracks = async (playlist_id: number) => {
        setSelectedPlaylist(playlist_id)
        console.log(selectedPlaylist)

        const baseUrl = "https://wishmedia.herokuapp.com"
        const results = await axios.get(`${baseUrl}/playlist/${playlist_id}`)
        console.log(results, "results")

        setTracks(results.data)


    }

    // const removeTrack = (track_id: number) => {


    // }

    const deleteTrack = async (track_id: number) => {

        try {
            const baseUrl = "https://wishmedia.herokuapp.com"
            await axios.delete(`${baseUrl}/playlist/${selectedPlaylist}/${track_id}`)
            
        }
        catch (error) {
            console.error(error)

        }

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
                                            <button onClick={() => deleteTrack(track.id)}>Remove</button>

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
