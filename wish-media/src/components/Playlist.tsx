import axios from "axios"
import { useEffect, useState } from "react";

interface Props {
    loggedInUser: any;
    setLoggedInUser: (data: any) => void;

}

const Playlist = (props: Props) => {
    const { loggedInUser, setLoggedInUser } = props;

    const [playlists, setPlaylists] = useState<any[]>([])
    const [userId, setUserId] = useState<Number>();

    async function fetchPlaylists() {
        const userId = loggedInUser.id
        console.log(userId, "user id")
        const baseUrl = "https://wishmedia.herokuapp.com"
        const results = await axios.get(`${baseUrl}/users/${userId}/playlists`)
        console.log(results, "results")
        setPlaylists(results.data)
        
        // console.log(playlists)
        // console.log(localStorage.getItem("user"))

    }


    useEffect(() => {
        fetchPlaylists()
    }, [loggedInUser])





    return (
        <>
            {
                playlists.map((playlist, index) => {
                    return(
                        <>
                    <h1>{playlist.playlist_name}</h1>

                    <button>View</button>
                    </>

                )})
            }


        </>

    )
}

export default Playlist;
