import ProductContext from "./ProductContext";
import React from "react";
import axios from "axios";

export default class ProductProvider extends React.Component {
  url = "https://3000-pink-mouse-vb214cfr.ws-us13.gitpod.io/";
  state = {
    products: []
  };

  async componentDidMount() {
    let response = await axios.get(this.url + "products");
  }

  render = () => {
    const context = {
      products: this.state.products,
      addProduct: (newProductName, cost) => {
        // before updating the array, call axios to add the new
        // product using the API
        let id = Math.floor(Math.random() * 10000 + 9999);

        // clone the original array
        const clone = [
          ...this.state.products,
          {
            id: id,
            product_name: newProductName,
            cost: cost
          }
        ];

        this.setState({
          products: clone
        });
      }
    };
    return (
      <ProductContext.Provider value={context}>
        {this.props.children}
      </ProductContext.Provider>
    );
  };
}

