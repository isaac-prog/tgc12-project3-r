import React, {useState, useContext} from "react"
import axios from "axios"
import config from "../config";
import UserContext from "../UserContext";
export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const userContext = useContext(UserContext);

    async function register() {
        let response = await axios.post(config.API_URL + "/users/reigster",{
            'email': email,
            'password': password
        });

        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        userContext.setUser({
            'email': email,
            'password': password
        })

    }

    return <div>
        <h1>Register</h1>
        <div>
            <label className="form-label">Email</label>
            <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            <label className="form-label">Password</label>
            <input type="text" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div>
            <label className="form-label">Confirm Password</label>
            <input type="text" className="form-control" onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className="my-3 btn btn-primary" onClick={register}>Register</button>
    </div>
}