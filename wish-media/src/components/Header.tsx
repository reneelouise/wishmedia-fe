import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeaderStyles.css';

interface Props {
    loggedInUser: any;
    setLoggedInUser: (data: any) => void;
}


const Header = (props: Props) => {
    const { loggedInUser, setLoggedInUser } = props;

    const persistUser = () => {
    
        // setLoggedInUser(JSON.parse(localStorage.getItem("user")!))
        setLoggedInUser(JSON.parse(localStorage.getItem("user")!))
      
        console.log(loggedInUser, "After persist");
    }

    

    // to persist the user
    useEffect(() => {
      persistUser()
    }, [])

    console.log(loggedInUser)

    return (
        <div id="header">
            <div id="logo">
                <img src="https://i.imgur.com/HLXukzg.png?1" alt="logo" />
            </div>
            <div id="logged-user">
                <img src={loggedInUser.image_url} alt="" />
                <h3>{loggedInUser.username}</h3>
            </div>

            <div id="navlinks">

                <Link to="/">Home</Link>
                <Link to="/playlist">Playlist</Link>
                <Link to="/login">Login</Link>
                {/* {!!loggedInUser.getItem === null
                    ? <Link to="/login">Login</Link>
                    : <Link to="/logout">Logout</Link> */}

                <Link to="/signup">Sign Up</Link>



            </div>



        </div>

    )
}

export default Header;





