import React from "react";
import axios from "axios";
import './style.css'

export default class ListingPage extends React.Component{
    url = "https://3000-turquoise-owl-ddfr8lwt.ws-us11.gitpod.io//";
        state = {
            data: [],
            filterTypes: [],
            '_id': '',
            "page":"listing"
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
        let response = await axios.get(this.url + "products/index");
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
            <h1>Bicycle listing</h1>
            <div class="parts-directory">
            {this.state.data.map(c =>{
            return(
            <div class="flex-directory" onClick={() => this.props.pageHandler("views",c.id)}>
            <div class="flex-directory-body"><h4>{c.name}</h4>
            <div class="flex-directory-body"><h5>{c.type}</h5>
            <div class="flex-directory-body"><h5>{c.cost}</h5>
            <img class="directory-images" src={c.image} alt="individual image"/>
            </div>
            </div>
            </div>
            </div>
            )
            })}
            </div>
          </React.Fragment>
          
        )
      }
    }