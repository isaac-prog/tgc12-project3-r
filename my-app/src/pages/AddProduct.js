import React from 'react'
import axios from 'axios'
import './style.css'

export default class AddProductForm extends React.Component{
    url = "https://3000-pink-mouse-vb214cfr.ws-us14.gitpod.io/"
    state= {
        product:[],
        name: "",
        cost: 0,
        description: "",
        category: "",
        image_url: "",
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let response = await axios.get(this.url + "api/products");
}
    
    addProducts = async (e) => {
        let newProducts = {
            'name':this.state.newName,
            'cost':this.state.newCost,
            'description':this.state.newDescription,
            'category':this.state.newCategory,
            'image_url':this.state.newImage_url,
        }
        console.log(newProducts)
        let response = await axios.post(this.url + "api/products", newProducts);
        let currentValues = this.state.case;
        let modifiedValues = [...currentValues, newProducts];
        this.setState({
            'case': modifiedValues,
            'newName': '',
            'newCost':0,
            'newDescription':'',
            'newCategory':'',
            'newImage_url':'',
        });
    }
    
    render() {
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

                <label>Cost</label><br/>
                <input
                    type="text"
                    name="newCost"
                    value={this.state.newCost}
                    onChange={this.updateFormField}
                /><br/><br/>
                
                <label>Description</label><br/>
                <input
                    type="text"
                    name="newDescription"
                    value={this.state.newDescription}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Category</label><br/>
                <input
                    type="text"
                    name="newCategory"
                    value={this.state.newCategory}
                    onChange={this.updateFormField}
                /><br/><br/>

                <button onClick={this.addProducts}>Add</button>
                </div><br/>
                </div>
            </React.Fragment>
        )
    }
}

