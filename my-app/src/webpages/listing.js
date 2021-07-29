import React from "react";
import axios from "axios";
import './style.css'
import {Link} from "react-router-dom"

export default class ListingPage extends React.Component{
    url = "https://3000-pink-mouse-vb214cfr.ws-us11.gitpod.io";
        state = {
            data: [],
            filterTypes: [],
            filterName: "",
            minPrice: "",
            MaxPrice: "",
            category:"",
            tags:"",
            '_id': '',
            "page":"products"
          }

      updateFormField = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
      }

      checkTask = (name) => {
        let currentTask = this.state.data.filter(t => t.type === name);
        console.log(currentTask)
        let modifiedTask = { ...currentTask };
        modifiedTask.done = !currentTask.done;
        console.log(modifiedTask);
        console.log(currentTask)
        let modifiedTasksList = this.state.data.map(t => {
            if (t.type !== name) {
                console.log(t, "t")
                return t;
            } else {
                console.log(modifiedTask, "modified task")
                return modifiedTask;
            }
        })
        this.setState({
            'data': modifiedTasksList
        })
        console.log(this.state.data)
      }
      
      async componentDidMount() {
        let response = await axios.get(this.url + "/api/products");
        console.log(response.data);
        let types = [];
        for(let data of response.data){
          if(!types.includes(data.type)){
            types.push(data.type);
          }
        }
        this.setState({
          data: response.data,
          filterTypes: types
        });
      }
      
      deleteProduct = async (task_id) => {
        let task_index = this.state.data.findIndex(t => t._id === task_id);
        let data = {
          _id: task_id
        }
      
        let response = await axios.post(this.url + "products/delete", data);
        let modifiedTasks = [
            ...this.state.data.slice(0, task_index),
            ...this.state.data.slice(task_index + 1),
            task_index
        ];
        this.setState({
            data: modifiedTasks
        });
      };
      render(){
        return(
          <React.Fragment>
            <h1>Products</h1>

            <div id="flex-container">
            <div class="result-container">
            <div class="parts-directory">
            {this.state.data.map(c =>{
            return(
            <div class="flex-directory" onClick={() => this.props.pageHandler("views",c.id)}>
            <Link to={"/views/" + c.id}></Link>
            <img class="individual-images" src={c.image_url} alt="individual image"/>
            <div class="flex-directory-body"><h4>{c.name}</h4>
            <div class="flex-directory-body"><h5>{c.type}</h5>
            <div class="flex-directory-body"><h5>{c.cost}</h5>
            
            
            </div>
            </div>
            </div>
            </div>
            )
            })}
            </div>
            </div>

            <div class="filter-container">
            <h3>Filters</h3>
            <label>Product Name</label><br/>
                <input
                    type="text"
                    name="productName"
                    value={this.state.newName}
                    onChange={this.updateFormField}
                /><br/><br/>

              <label>Min. Price</label><br/>
                <input
                    type="int"
                    name="minPrice"
                    value={this.state.minPrice}
                    onChange={this.updateFormField}
                /><br/><br/>

              <label>Max. Price</label><br/>
                <input
                    type="text"
                    name="maxPrice"
                    value={this.state.MaxPrice}
                    onChange={this.updateFormField}
                /><br/><br/>

              <label>Category</label><br/>
                <select
                    name="category"
                    value={this.state.category}
                    onChange={this.updateFormField}
                >
                {this.state.data.map( (c)=><option key={c.value}  value={c.value}>{c.display}</option>)}
                </select>
                <br/><br/>

                <label>Tags</label><br/>
                <input
                    type="checkbox"
                    name="tags"
                    value={this.state.tags}
                    onChange={this.updateFormField}
                /><br/><br/>
            </div>
            </div>
            <Link to="/create"><button type="button">Add product</button></Link>
          </React.Fragment>
          
        )
      }
    }