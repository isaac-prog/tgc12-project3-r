import { useHistory } from "react-router-dom";
import React, {useState} from 'react';

export default function ContactUs() {
    const history = useHistory();
    const [formState, setFormState] = useState({
        'fullname': '',
        'email':''
    })

    const updateFormField = (e) => {
        setFormState(
            {
                ...formState,
                [e.target.name]: e.target.value
            }
        )
    }
    
    const submitForm = () => {
        history.push("/form-submitted", {
            formState: formState
        });
      };

    return (
        <React.Fragment>
            <h1>Contact Us</h1>
            <div>
                <div>
                    <label>Full Name:</label>
                    <input type="text" 
                           name="fullname" 
                           value={formState.fullname}
                           onChange={updateFormField}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email"/>
                </div>
                <input type="button"
                           onClick={submitForm} 
                           value="submit"
                           onChange={updateFormField}/>

            </div>
        </React.Fragment>
    )
}


