
import Media from "./Media";

interface Props {
    media: Array<any>;

}
const MediaList = (props: Props) => {
    const { media } = props;
    return (
        <>

        <h1 id="suggested">Suggested for you</h1>
            {media.map((item, index) => {
                return (
                    <>
                        <Media
                            artworkUrl100={item.artworkUrl100}
                            shortDescription={item.shortDescription}
                            trackName={item.trackName}
                            trackId={item.trackId}
                            kind={item.kind}
                        />

                    </>

                )
            })}
         
        </>

    )
}

export default MediaList;
