import React from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import SubmittedForm from "./pages/FormSubmitted";
import PostPage from "./pages/PostPage";
import ProductListingPage from "./pages/ProductListingPage";
import './pages/style.css';
import Create from "./pages/create"
import ProductProvider from "./pages/ProductProvider";
import ProductListing from "./pages/ProductListing";
import AddProductForm from "./pages/AddProduct";
import ProductDetailsPage from "./pages/ProductDetailsPage";


 export default class App extends React.Component{
  url = "https://pink-mouse-vb214cfr.ws-us13.gitpod.io/";

  state = {
    products: []
}

async componentDidMount() {
  let response = await axios.get(this.url + "api/products/");
  console.log(response.data)
  this.setState({
    products: response.data
  });
  console.log(this.state.products)
}

render() {
    const context = {
        products: () => {
            return this.state.products;
        },
        addProduct: (productName, cost) => {
            let id = Math.floor(Math.random() * 10000 + 99999);
            this.setState({
                'products': [...this.state.products, {
                    'id': id,
                    'product_name': productName,
                    'cost': cost
                }]
            })
        },
        getProductByID: (productID) => {
          console.log(productID)
            return this.state.products.find( p => p.id == productID)
        }
    }
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

            <div className="App container-fluid">
        <ProductProvider>
        <Switch>
        <Route exact path="/">
       < ProductListing/>
            <AddProductForm/>
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
        <Route exact path="/productDetails/:id">
          <ProductDetailsPage/>
        </Route>
      </Switch>
        </ProductProvider>
      </div>


                

            <footer>
            ✉
            ☏
            🖶
            </footer>
            </Router>
        </React.Fragment>

    )
  }
}