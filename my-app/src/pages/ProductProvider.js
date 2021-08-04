import ProductContext from "./ProductContext";
import React from "react"
import axios from "axios";

export default class ProductProvider extends React.Component {
url = 'https://3000-pink-mouse-vb214cfr.ws-us14.gitpod.io/'
    state = {
        products: []
    }

    async componentDidMount() {
      let response = await axios.get(this.url + "api/products/");
      console.log(response.data)
      this.setState({
        products: response.data
      });
      console.log(this.state.products)
    }
    
    render() {
        const context = {
            products: () => {
                return this.state.products;
            },
            addProduct: (productName, cost, description, category, image_url) => {
                // let id = Math.floor(Math.random() * 10000 + 99999);
                this.setState({
                    'products': [...this.state.products, {
                        // 'id': id,
                        'product_name': productName,
                        'cost': cost,
                        'Description': description,
                        'Category': category,
                        'Image_url': image_url
                    }]
                })
            },

            getProductByID: (productID) => {
                return this.state.products.find( p => p.id == productID)
            }
        }

        return <ProductContext.Provider value={context}>
            {this.props.children}
        </ProductContext.Provider>
    }
}