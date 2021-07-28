import ProductContext from "./ProductContext";
import React from "react";

export default class ProductProvider extends React.Component {
  state = {
    products: [
      { id: 1, product_name: "ACME Anvils", cost: 9.99 },
      { id: 2, product_name: "ACME Hammer", cost: 15.5 },
      { id: 3, product_name: "ACME Screwdriver", cost: 12.5 }
    ]
  };

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

