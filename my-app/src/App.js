import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import SubmittedForm from "./pages/FormSubmitted";
import PostPage from "./pages/PostPage";
import ProductListingPage from "./pages/ProductListingPage";
import './pages/style.css';
import Create from "./pages/create"


 export default function App() {
    return (
        <React.Fragment>
          <Router>
            <div class="header">                      
                 <a onClick={() => this.pageHandler("home")} href="#default"><img class='logo'src={require("./images/organic-logo.jpg").default}/></a> 
                <ul class="nav-container">
                <li>
                  <Link to="/"><a class="active">Home</a></Link>
                  </li>
                  <li>
                  <Link to="/contact"><a class="active">Contact</a></Link>
                  </li>
                  <li>
                  <Link to ="/posts"><a class="active">Posts</a></Link>
                  </li>
                  <li>
                  <Link to ="/catelog"><a class="active">Products</a></Link>
                  </li>
                  <li>
                  <Link to ="/create"><a class="active">Create</a></Link>
                  </li>
                </ul>
                </div>
                <div class="parts-directory">
            <img class="directory-images" src={require("./images/organic.jpg").default} alt="bicycle"/>
            
            </div>
                <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/contact">
          <ContactUs/>
        </Route>
        <Route exact path="/form-submitted">
	        <SubmittedForm/>
        </Route>
        <Route exact path="/posts">
          <PostPage/>
        </Route>
        <Route exact path="/catelog">
          <ProductListingPage/>
        </Route>
        <Route exact path="/create">
          <Create/>
        </Route>
      </Switch>

            <footer>
            ✉
            ☏
            🖶
            </footer>
            </Router>
        </React.Fragment>

    )
}