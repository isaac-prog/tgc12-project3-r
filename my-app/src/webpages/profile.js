import React from 'react';
import { useLocation } from 'react-router-dom';

export default function SubmittedForm() {

  const location = useLocation();
  let username = location.state.formState.username;
  let email = location.state.formState.email;
  

  return (
    <React.Fragment>
      <h1>Your profile: </h1>
      <p>Your name: {username}</p>
      <p>Your email: {email}</p>
    </React.Fragment>
  );
}

