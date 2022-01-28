import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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




    function logout() {
        setLoggedInUser(null)
        localStorage.removeItem("user")


    }


    return (
        <div id="header">
            <div id="logo">
                <img src="https://i.imgur.com/HLXukzg.png?1" alt="logo" />
            </div>
            {!!loggedInUser
                ? (<div id="logged-user">
                    <img src={loggedInUser.image_url} alt="" />
                    <h3>{loggedInUser.username}</h3>
                </div>)
                : <></>
            }

            <div id="navlinks">

                <Link to="/">Home</Link>
                {!!loggedInUser
                    ? <Link to="/playlist">Playlist</Link>
                    : <Link to="/playlist"></Link>
                }
                {/* <Link to="/login">Login</Link> */}
                {!!loggedInUser
                    ? <Link to="/login" onClick={logout}>Logout</Link>
                    : <Link to="/login">Login</Link>
                }
                <Link to="/signup">Sign Up</Link>



            </div>



        </div>

    )
}

export default Header;





