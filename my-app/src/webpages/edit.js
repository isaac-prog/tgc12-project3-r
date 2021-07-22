import React from 'react'
import axios from 'axios'
import './../webPages/style.css'

export default class EditPage extends React.Component{
    url = "https://tgc-project3.herokuapp.com/"

    state= {
        data: [],
        editedName: "",
        editedType: "",
        editedDescription: "",
        editedImage: "",
        taskBeingEdited: 0,
        modifiedTaskName: ""
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async componentDidMount() {
        let response = await axios.get(this.url + "products/" + this.props.id + "/edit");
        this.setState({
          data:response.data,
          editedName: response.data.name,
          editedType: response.data.type,
          editedDescription:  response.data.description,
          editedImage: response.data.image,
        })
        this.updateTask(this.props.id);
        this.setState({
        taskBeingEdited: 0
        })
}

updateTask = async (task_id) => {
  let newdata = {
    _id: task_id,
    name: this.state.editedName,
    type: this.state.editedType,
    description: this.state.editedDescription,
    image: this.state.editedImage
  }
  let response = await axios.post(this.url + "products/" + this.props.id + "/edit", newdata);
}
  
    
    render() {
        return (
            <React.Fragment>
                <div class="create-edit-field">
                <h2>Edit product</h2>
            <div>
                <label>Bicycle Name</label><br/>
                <input
                    type="text"
                    name="editedName"
                    value={this.state.editedName}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Type</label><br/>
                <input
                    type="text"
                    name="editedType"
                    value={this.state.editedType}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Image</label><br/>
                <input
                    type="text"
                    name="editedImage"
                    value={this.state.editedImage}
                    onChange={this.updateFormField}
                /><br/><br/>

                <label>Description</label><br/>
                <textarea class="description-textbox"
                    type="text"
                    name="editedDescription"
                    value={this.state.editedDescription}
                    onChange={this.updateFormField}/>
                    <br/><br/>

                <button onClick={() => this.updateTask(this.props.id)}>Update Changes</button>
                </div><br/>
                </div>
                
            </React.Fragment>
        )
    }
}

