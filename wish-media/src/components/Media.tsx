import '../styles/MediaStyles.css';

interface Props {
    artworkUrl100: string;
    shortDescription: string | undefined;
    trackName: string;
    trackId: number;
    kind: string;
}

const Media = (props: Props) => {
    const { artworkUrl100, shortDescription, trackName, kind } = props


    return (
        <>
            <div id="card">
                <div id="image-text">
                    <div id="artwork">
                        <img src={artworkUrl100} alt="album-cover" />
                    </div>
                    <div id="media-info">
                        <h1>{trackName}</h1>
                        <h5>Media: {kind}</h5>
                        <p>{shortDescription}</p>

                    </div>
                </div>
                <div id="add-btn">
                    <button>Add to playlist</button>
                </div>
            </div>
        </>

    )
}

export default Media;
