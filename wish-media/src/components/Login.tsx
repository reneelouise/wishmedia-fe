import axios from 'axios';
import { useEffect, useState } from 'react';
import '../styles/LoginStyles.css';

interface Props {
    setLoggedInUser: (data: any) => void;

}
const Login = (props: Props) => {
    const { setLoggedInUser } = props

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])


    const fetchUsers = async () => {
        const baseUrl = "https://wishmedia.herokuapp.com"
        const result = await axios.get(`${baseUrl}/users`)
        setUsers(result.data)
        console.log(users)
    }



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()


        const baseUrl = "https://wishmedia.herokuapp.com"
        const result = await axios.get(`${baseUrl}/users`)
        const results = result.data
        const user = results.find((result: any) => {
            return (username === result.username) && (password === result.password)

        })

        if (user) {
            localStorage.removeItem("user")
            setLoggedInUser(user)
            localStorage.setItem("user", JSON.stringify(user))
        } else {
            alert("invalid user!")
        }


        console.log(user, "found user")
        console.log(result)


    }


    useEffect(() => {
        fetchUsers()
    }, [])


    return (
        <>

            <div id="login-page">
                <div id="login-form">
                    <h1 className="form-header">Sign In</h1>
                    <p>Sign in to manage your playlists 🎵</p>
                    <form onSubmit={handleSubmit}>

                        <input placeholder="Username" type="text" onChange={(e) => setUsername(e.target.value)} />
                        <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <button className="send-btn" >Sign In</button>


                    </form>
                </div>

                <div id="image">
                    <img src="https://i.imgur.com/hKTNUC9.jpg" alt="" />
                </div>
            </div>
        </>




    );
}

export default Login;
