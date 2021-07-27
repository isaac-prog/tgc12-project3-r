import React from 'react'
import axios from 'axios'
import './style.css'
import { Widget } from "@uploadcare/react-widget";

export default class CreatePage extends React.Component{
    url = "https://indigo-hedgehog-qqoz3ebj.ws-us11.gitpod.io/"
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

                <button onClick={this.add}>Add</button>
                </div><br/>
                </div>
            </React.Fragment>
        )
    }
}

