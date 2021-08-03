import React, {useContext} from "react"
import ProductContext from "./ProductContext"
import { Link } from 'react-router-dom'
import './style.css'

export default function ProductListing() {
    let context = useContext(ProductContext);
    console.log(context.products());

    return <React.Fragment>
        <div class="parts-directory">
        {context.products().map(p =>
        <div class="flex-directory" key={p.id}>
        <Link to={"/productDetails/" + p.id}>
            <div class="flex-directory-body"><h4>{p.name}</h4>
            <img class="directory-images" src={p.image_url} alt="image"/>
            </div>
            </Link>
                </div>)}
            </div>
    </React.Fragment>
}