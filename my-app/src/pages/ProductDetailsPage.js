import React from "react";
import ProductContext from "./ProductContext";
import axios from "axios";

export default class ProductDetailsPage extends React.Component {
  url = "https://tgc-project2.herokuapp.com/";
  static contextType = ProductContext; // Note 1
  state = {
    productID: 0,
    product: []
  };

 async componentDidMount() {
  let response = await axios.get(this.url + "api/products/" + this.props.id);
  console.log(this.props.match.params);
  let { productID } = this.props.match.id;
  this.setState({
    productID,
    product: response.data
    });
    console.log('productid ', productID)
  }

  render() {
    console.log(this.state.productID);
    let product = this.context.getProductByID(this.state.productID);
    console.log(product);
    console.log(1);
     return (
      <React.Fragment>
        <h1>Product Details</h1>
        {product ? (
          <ul>
            <li>Product Name: {product.name}</li>
            <li>Product Cost:{product.cost}</li>
            <li>Product Description:{product.description}</li>
            <li>Product ID:{product.id}</li>
          </ul>
        ) : null}
      </React.Fragment>
    );
  }
}