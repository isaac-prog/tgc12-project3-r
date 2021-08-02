import React, {useContext} from "react";
import ProductContext from "./ProductContext";

export default function ProductListing() {
  let context = useContext(ProductContext);
  console.log(context);
  
  return (
    <React.Fragment>
      <ul>
        {context.products.map(p => (
          <li>{p.product_name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

