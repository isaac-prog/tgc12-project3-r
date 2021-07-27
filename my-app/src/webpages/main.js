import React from "react";
import './style.css'
import CreatePage from "./create";
import Views from "./views.js";
import ListingPage from "./listing.js"
import EditPage from "./edit.js"
import RegisterPage from "./register.js"
import LoginPage from "./login.js";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class MainPage extends React.Component{
    state = {
        "page": "home",
        id: ""
      }
      pageHandler = (name, id = "") => {
        this.setState({
          page: name,
          id: id
        })
      }
    render(){
        return (
          <React.Fragment>
          <Router>
                  <div class="header">                      
                 <a onClick={() => this.pageHandler("home")} href="#default"><img class='logo'src={require("./../images/organic-logo.jpg").default}/></a> 
                <ul class="nav-container">
                <li>
                  <Link to="/"><a class="active">Home</a></Link>
                  </li>
                  <li>
                  <Link to="/products"><a class="active">Products</a></Link>
                  </li>
                  <li>
                  <Link to="/login"><a class="active">Login</a></Link>
                  </li>
                  <li>
                  <Link to="/register"><a class="active">Register</a></Link>
                  </li>
                </ul>
                </div>

            <React.Fragment>
            
            <div class="parts-directory">
            <img class="directory-images" src={require("./../images/organic.jpg").default} alt="bicycle"/>
            
            </div>
            </React.Fragment> 

            <switch>
            <Route exact path="/">
          <main />
          </Route>
          <Route exact path="/products">
          <ListingPage />
          </Route>
          <Route exact path="/login">
          <LoginPage />
          </Route>
          <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/edit">
          <EditPage />
          </Route>
          <Route exact path="/views">
          <Views />
          </Route>
          <Route exact path="/create">
          <CreatePage />
          </Route>
            </switch>
          </Router>

            <footer>
            ✉
            ☏
            🖶
            </footer>
            </React.Fragment>
          );
    }
}

export default MainPage