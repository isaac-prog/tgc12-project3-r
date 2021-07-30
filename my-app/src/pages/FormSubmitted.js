import React from "react"
import { useLocation } from 'react-router-dom';


export default function SubmittedForm(){
  const location = useLocation();
  let fullname = location.state.formState.fullname;
  let email = location.state.formState.email;

    return (
        <React.Fragment>
            <h1>Thank you for contacting us</h1>
            <p>Your name: {fullname}</p>
            <p>Your email: {email}</p>
        </React.Fragment>
    )
}


