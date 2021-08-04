import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContext";
import {useParams} from "react-router-dom";
import axios from "axios";
const  url = "https://3000-pink-mouse-vb214cfr.ws-us14.gitpod.io/";
export default function ProductDetailsPage() {

  let { id } = useParams();
  const [product, setProduct] = useState({});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    //Call API
      const fetchProduct = async (id) => {
        const response = await axios.get(url+'api/products/'+id);
    setProduct(response.data);
  }
    console.log(id)
  fetchProduct(id)
}, []);

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