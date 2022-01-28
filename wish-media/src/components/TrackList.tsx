interface Prop {
    tracks: Array<any>;
    username: string;
}
// Trying to workout a temporary fix
const TrackList = (props: Prop) => {
    const { tracks, username } = props;

    return (
        <>

            <div id="playlist-header">
                <h1>{username}'s Playlist</h1>

            </div>
            {
                tracks.map((track, index) => {
                    return (
                        <>
                            <div id="track-card">
                                <div id="track-info">
                                    <h1>{track.track_name}</h1>
                                    {/* <p>{track}</p> */}
                                    <img src={track.track_image_url} alt="track image" />
                                </div>
                            </div>


                        </>
                    )
                })
            }

        </>
    )
}

export default TrackList;