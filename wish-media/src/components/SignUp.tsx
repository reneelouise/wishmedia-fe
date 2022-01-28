import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/LoginStyles.css';


const SignUp = () => {

    const [firstName, setFirstName] = useState<string>(" ");
    const [lastName, setLastName] = useState<string>(" ");
    const [email, setEmail] = useState<string>(" ");
    const [password, setPassword] = useState<string>(" ")
    const [username, setUsername] = useState<string>(" ");
    const [mobile, setMobile] = useState<string>(" ");
    const [imageUrl, setImageUrl] = useState<string>("https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png")


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
   

        try {
            const baseUrl = "https://wishmedia.herokuapp.com"
            await axios.post(`${baseUrl}/users`, {
                firstname: firstName,
                lastname: lastName,
                email: email,
                username: username,
                mobile: mobile,
                password: password,
                image_url: imageUrl

            })
        }
        catch (error) {
            console.error(error)

        }


    }



    return (
        <>


            <div id="signup-page">
                <div id="signup-form">
                    <h1 className="form-header">Sign Up</h1>
                    <p>Sign up to start managing your playlists 🎵</p>
                    <form onSubmit={handleSubmit}>

                        <input placeholder="First Name" required type="text" onChange={(e) => setFirstName(e.target.value)} />
                        <input placeholder="Last Name" required type="text" onChange={(e) => setLastName(e.target.value)} />
                        <input placeholder="Email address" required type="email" onChange={(e) => setEmail(e.target.value)} />
                        <input placeholder="Username" required type="text" onChange={(e) => setUsername(e.target.value)} />
                        <input placeholder="Password" required type="password" onChange={(e) => setPassword(e.target.value)} />
                        <input placeholder="Mobile Number" required type="text" onChange={(e) => setMobile(e.target.value)} />
                        <button className="form-btn" >Sign up</button>


                    </form>
                </div>

                <div id="image">
                    <img src="https://i.imgur.com/hKTNUC9.jpg" alt="" />
                </div>
            </div>
        </>




    );
}

export default SignUp;

