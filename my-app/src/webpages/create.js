import React from 'react'
import axios from 'axios'
import './style.css'

export default class CreatePage extends React.Component{
    url = "https://tgc-project3.herokuapp.com/"
    state= {
        product:[],
        newName: "",
        newType: "",
        newDescription: "",
        newImage: "",
        taskBeingEdited: 0,
        modifiedTaskName: "",
        newDone: false,
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let response = await axios.get(this.url + "products/create");
}
    
    add = async (e) => {
        let newBike = {
            'name':this.state.newName,
            'type':this.state.newType,
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
        return (
            <React.Fragment>
                <div class="create-edit-field">
                <h2>Create new product</h2>
            <div>
                <label>Bicycle Name</label><br/>
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

                <label>Image</label><br/>
                <input
                    type="text"
                    name="newImage"
                    value={this.state.newImage}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Description</label><br/>
                <textarea class="description-textbox"
                    type="text"
                    name="newDescription"
                    value={this.state.newDescription}
                    onChange={this.updateFormField}
                /><br/><br/>

                <button onClick={this.add}>Add</button>
                </div><br/>
                </div>
            </React.Fragment>
        )
    }
}

