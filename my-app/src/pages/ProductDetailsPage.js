import React from "react";
import ProductContext from "./ProductContext";

export default class ProductDetailsPage extends React.Component {
  static contextType = ProductContext; // Note 1
  state = {
    productID: 0
  };
  componentDidMount() {
    let { productID } = this.props.match.params;
    this.setState({
      productID
    });
  }

  render() {
    let product = this.context.getProductByID(this.state.productID);
     return (
      <React.Fragment>
        <h1>Product Details</h1>
        {product ? (
          <ul>
            <li>Product Name: {product.product_name}</li>
            <li>Product Cost:{product.cost}</li>
          </ul>
        ) : null}
      </React.Fragment>
    );
     }
    }
