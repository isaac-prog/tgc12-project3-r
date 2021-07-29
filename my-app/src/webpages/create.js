import React from 'react'
import axios from 'axios'
import './style.css'
import { Widget } from "@uploadcare/react-widget";
import ProductContext from "./../pages/ProductContext";
import ProductListing from "./../pages/ProductListing";

export default class CreatePage extends React.Component{
    url = "https://indigo-hedgehog-qqoz3ebj.ws-us11.gitpod.io/"
    state= {
        product:[],
        newName: "",
        newType: "",
        newCategory:"",
        newDescription: "",
        newImage: "",
        cost: 0,
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onAddProduct = () => {
        this.context.addProduct(
            this.state.newName, 
            this.state.newType,
            this.state.newCategory,
            this.state.newDescription,
            this.state.newImage,
            this.state.cost,
            )
     }

    async componentDidMount() {
        let response = await axios.get(this.url + "api/products/create");
}
    add = async (e) => {
        let newBike = {
            'name':this.state.newName,
            'type':this.state.newType,
            'category':this.state.newCategory,
            'description':this.state.newDescription,
            'image':this.state.newImage,
            'done': this.state.newDone
        }
        console.log(newBike)
        let response = await axios.post(this.url + "products/create", newBike);
        let currentValues = this.state.product;
        let modifiedValues = [...currentValues, newBike];
        this.setState({
            'product': modifiedValues,
            'newName': '',
            'newType':'',
            'newDescription':'',
            'newImage':'',
            'done': false
        });
    }

    render() {
        const context = {
            getProducts: () => {
              // we must arrow function because want `this` to refer to component
              return this.state.products;
          },
          addProduct : (productName, cost) => {
            let id = Math.floor(Math.random() * 10000 + 9999);
            this.setState({
                'products': [ ...this.state.products, {
                    id: id,
                    product_name : productName,
                    cost: cost
                }]
            })
         }   
           }
        return (
            <React.Fragment>
                <div class="create-edit-field">
                <h2>Create new product</h2>
                
            <div>
                <label>Name</label><br/>
                <input
                    type="text"
                    name="newName"
                    value={this.state.newName}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Type</label><br/>
                <input
                    type="text"
                    name="newType"
                    value={this.state.newType}
                    onChange={this.updateFormField}
                /><br/><br/>

                    <label>Category</label><br/>
                <input
                    type="text"
                    name="newCategory"
                    value={this.state.newType}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Image</label><br/>
                <p>
            <label htmlFor='file'>Your file:</label>{' '}
            <Widget publicKey='c26b275305df830af708' id='file' />
                </p>

                <label>Description</label><br/>
                <textarea class="description-textbox"
                    type="text"
                    name="newDescription"
                    value={this.state.newDescription}
                    onChange={this.updateFormField}
                /><br/><br/>

                    <label>Cost</label><br/>
                <input
                    type="text"
                    name="cost"
                    value={this.state.newType}
                    onChange={this.updateFormField}
                /><br/><br/>

                <button onClick={this.add}>Add</button>
                </div><br/>
                </div>
            </React.Fragment>
        )
    }
}

