import '../styles/MediaStyles.css';




interface Props {
  artworkUrl100: string;
  shortDescription: string | undefined;
  trackName: string;
  trackId: number;
  kind: string;

}

const Media = (props: Props) => {
  const { artworkUrl100, shortDescription, trackName, kind} = props;
  

  

  

  const handleListItemClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // const baseUrl = "https://wishmedia.herokuapp.com"
    // const results = await axios.post(`${baseUrl}/playlist/:playlist_id`)

    console.log("I would like to make a post request")
  }


  


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
          <form onSubmit={(e) => handleListItemClick(e)}>
          
            <button>Add to playlist</button>

          </form>
        </div>

      
     
      </div>


    </>

  )
}



export default Media;
