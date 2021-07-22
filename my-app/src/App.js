import './App.css';
import MainPage from './webPages/main.js'
import React from 'react';
import './webPages/style.css'

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