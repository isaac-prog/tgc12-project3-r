import React from "react";
import ProductListing from "./ProductListing"
import AddProduct from "./AddProduct"

export default function ProductListingPage(props) {
  return (
    <React.Fragment>
      <ProductListing />
      <AddProduct />
    </React.Fragment>
  );
}

