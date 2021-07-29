import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

export default function RegisterPage() {
    const history = useHistory();
    const [formState, setFormState] = useState({
        'username': '',
        'email':'',
        'password':''
    })

    const submitForm = () => {
        history.push("/form-submitted", {
            formState: formState
        });
      };

    const updateFormField = (e) => {
        setFormState(
            {
                ...formState,
                [e.target.name]: e.target.value
            }
        )
    }

    useEffect(()=>{
        const fetchPost = async () => {
          const response = await axios.get('https://3000-pink-mouse-vb214cfr.ws-us11.gitpod.io/users/register');
          setFormState(response.data)
      }
    })

    return (
        <React.Fragment>
            <h1>Register</h1>
            <div>
                <div>
                    <label>Username:</label>
                    <input type="text" 
                           name="username" 
                           value={formState.username}
                           onChange={updateFormField}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" 
                           name="email"
                           value={formState.email}
                           onChange={updateFormField}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" 
                           name="password"
                           value={formState.password}
                           onChange={updateFormField}/>
                </div>
                <input type="button" onClick={submitForm}>Submit</input>
            </div>
        </React.Fragment>
    )
}

