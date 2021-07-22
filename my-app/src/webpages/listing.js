import React from "react";
import './style.css'

class ListingPage extends React.Component{
    url = "https://tgc-project3.herokuapp.com/";
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
      
    render() {
         return (
           <React.Fragment>
             <div class="wallPaper">
                <img class="image_center" src={require("./../images/bicycle.jpg").default}/>
             </div>
             {/* table */}
      <div id="flex-container">
      <div class="parts-directory">
      <div class="flex-directory" onClick={() => this.pageHandler("CPU")}>
      <div class="flex-directory-body"><h4>{c.name}</h4>
      <div class="flex-directory-body"><h5>{c.type}</h5>
      <div class="flex-directory-body"><h5>{c.cost}</h5>
      <img class="directory-images" src={c.image} alt="individual bicycle"/>
      </div>
      </div>
      </div>
      </div>

          <table>
          {this.state.data.map(c => {
               return (
                <tr>
                  <td>
                  <button onClick={() => this.props.pageHandler("display", c._id)}> View</button>
                  <button onClick={() => this.props.pageHandler("edit", c._id)}> Edit</button>
                  <button onClick={() => this.deleteCase(c._id)}>Delete</button></td>
                </tr>
                )
              })}
              </table>
             </div>
      
             {/* filter box */}
          <div class="filter-container">
            <h3>Filters</h3>
            <h4>Case type</h4>
            <div class="filter-segments">
            {this.state.filterTypes.map((f)=>(
                  <React.Fragment>
                       <input type="checkbox" 
                          name="case"
                    onChange={() => {
                    this.checkTask(f.type)
                          }}/>
                    <span>{f}</span><br/>
                  </React.Fragment>
                ))}
              </div>
              <button onClick={{}}>Filter</button>
           </div>
          </div>
          </React.Fragment>
    )
    }
}
