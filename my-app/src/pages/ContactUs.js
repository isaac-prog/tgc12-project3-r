import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

export default function ContactUs() {
    const history = useHistory();

    const [formState, setFormState] = useState({
        'fullname': '',
        'email':''
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
    return (
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <div>
                    <label>Full Name:</label>
                    <input type="text" name="fullname"
                    value={formState.fullname}
                    onChange={updateFormField}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email"
                    value={formState.email}
                    onChange={updateFormField}/>

                </div>
                <input type="button" onClick={submitForm}/>
            </div>
        </React.Fragment>
    )
}
