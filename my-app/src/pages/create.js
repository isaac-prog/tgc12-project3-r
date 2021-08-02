import React from "react";
import ProductContext from "./ProductContext";
import ProductListing from "./ProductListing"
import ProductProvider from "./ProductProvider";
import AddProduct from "./AddProduct";
export default class Create extends React.Component {
    state = {};
    render() {
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
         <React.Fragment>
         <ProductProvider>
         {/* <ProductListing/> */}
         <AddProduct/>
         </ProductProvider>
         </React.Fragment>
      </ProductContext.Provider>
       )
   }
}