import React from "react";
import './style.css'
import CreatePage from "./create";
import Views from "./views.js";
import ListingPage from "./listing.js"
import EditPage from "./edit.js"
import RegisterPage from "./register.js"
import LoginPage from "./login.js";

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
          <React.Fragment >
                    <div class="header">                      
                 <a onClick={() => this.pageHandler("home")} href="#default"><img class='logo'src={require("./../images/bikelogo.jpg").default}/>SG Bicycle Rental</a> 
                <ul class="nav-container">
                <li onClick={() => this.pageHandler("home")}><a class="active">Home</a></li>
                <li onClick={() => this.pageHandler("listing")}><a class="active">Rentals</a></li>
                <li onClick={() => this.pageHandler("login")}><a class="active">Login</a></li>
                <li onClick={() => this.pageHandler("register")}><a class="active">Register</a></li>
                </ul>
                </div>

            {this.state.page == "home" ?
            <React.Fragment>
            
            <div class="parts-directory">
            <img class="directory-images" src={require("./../images/bicycle.jpg").default} alt="bicycle"/>
            
            <div>
                <h2>SG Bicycle Rental</h2>
            </div>
            </div>
            </React.Fragment> : ""
            }
      
            {this.state.page === "create" ? <CreatePage/> : ""}
            {this.state.page === "views" ? <Views pageHandler={this.pageHandler}/> : ""}
            {this.state.page === "listing"? <ListingPage pageHandler={this.pageHandler} id={this.state.id}/> : ""}
            {this.state.page === "edit"? <EditPage pageHandler={this.pageHandler} id={this.state.id}/> : ""}
            {this.state.page === "login"? <LoginPage pageHandler={this.pageHandler} id={this.state.id}/> : ""}
            {this.state.page === "register"? <RegisterPage pageHandler={this.pageHandler} id={this.state.id}/> : ""}

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