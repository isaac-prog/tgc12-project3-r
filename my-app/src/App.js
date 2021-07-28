import './App.css';
import MainPage from './webpages/main.js'
import React from 'react';
import './webpages/style.css';

class App extends React.Component {
  render() {
    return (
         <React.Fragment>
         <MainPage/>
         </React.Fragment>
       )
   }
}
export default App;