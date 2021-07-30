import React from "react";
import ProductContext from "./ProductContext"

export default class AddProduct extends React.Component {


  static contextType = ProductContext;  // note 1
  state = {
    product_name: "",
    cost: 0
  };

  onUpdateFormField = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onAddProduct = () => {
     // note 2
     this.context.addProduct(this.state.product_name, this.state.cost)
  }

  render() {
    return (
      <React.Fragment>
        <h1>Add New Product</h1>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="product_name"
            value={this.state.product_name}
            onChange={this.onUpdateFormField}
          ></input>
        </div>
        <div>
          <label>Product Cost</label>
          <input
            type="text"
            name="cost"
            value={this.state.cost}
            onChange={this.onUpdateFormField}
          ></input>
        </div>
        <button onClick={this.onAddProduct}>Add</button>
      </React.Fragment>
    );
  }
}



