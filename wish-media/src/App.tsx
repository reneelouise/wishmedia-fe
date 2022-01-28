import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Playlist from './components/Playlist';
import SignUp from './components/SignUp';
import MediaList from './components/MediaList';
import TrackList from './components/TrackList';
import Search from './components/Search';
import { useEffect, useState } from 'react';



function App() {


  const [media, setMedia] = useState<[]>([]);
  const [keyword, setKeyword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState<any>({});
  const [tracks, setTracks] = useState<any[]>([]);

  
  return (

    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element=
            {<>
              <Header setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
              <Search setMedia={setMedia} keyword={keyword} setKeyword={setKeyword} />
              <MediaList media={media} />
              <Footer />
            </>
            }
          />

          <Route path="/login" element=
            {<>
              <Header setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
              <Login setLoggedInUser={setLoggedInUser} />
              {/* <Footer /> */}
            </>
            }
          />

          <Route path="/signup" element=
            {<>
              <Header setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
              <SignUp />
              <Footer />
            </>
            }
          />

          <Route path="/playlist" element=
            {<>
              <Header setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
              <Playlist setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
              <Footer />
            </>
            }
          />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
