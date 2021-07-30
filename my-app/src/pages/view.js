import ProductContext from "./pages/ProductContext.js"
import ProductDetailsPage from "./pages/ProductDetailsPage.js";
import { BrowserRouter as Router, 
  Switch,
  Route,
  Link 
} from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage";
import React from 'react'

export default class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        product_name: "ACME Anvils",
        cost: 9.99
      },
      {
        id: 2,
        product_name: "ACME Hammers",
        cost: 19.99
      },
      {
        id: 3,
        product_name: "ACME Screwdrivers",
        cost: 29.99
      }
    ]
  }

  render() {
    const context = {
      getProducts: () => {
          // we must arrow function because want `this` to refer to component
          return this.state.products;
      },
      addProduct : (productName, cost) => {
         let id = Math.floor(Math.random() * 10000 + 9999);
         this.setState({
             'products': [ ...this.state.products, {
                 id: id,
                 product_name : productName,
                 cost: cost
             }]
         })
      },
      getProductByID: productID => {
        return this.state.products.find(p => p.id == productID);
      }
    };

    return (
        <React.Fragment>
          <ProductContext.Provider value={context}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <ProductListingPage />
                </Route>
                <Route
                    path="/productDetails/:productID"
                    render={props => <ProductDetailsPage {...props} />}
                  ></Route>
                </Switch>
             </Router>
          </ProductContext.Provider>
        </React.Fragment>
      );
    }
    }
    