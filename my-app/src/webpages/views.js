import React from "react";
import axios from "axios";
import ProductContext from "./ProductContext";
import { BrowserRouter as Router, 
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class DisplayPage extends React.Component {
  static contextType = ProductContext;
 url = "https://tgc-project2.herokuapp.com/";

 state = {
   data: []
 };

 async componentDidMount() {
  let response = await axios.get(this.url + "api/products/" + this.props.id);
  this.setState({
    data: response.data
  })
 }

 render() {
  return(
    <div>
    {this.state.data.map(c =>{
    <React.Fragment>
    {this.state.data.admin === true ? 
    <button onClick={() => this.props.pageHandler("edit", c.id)}> Edit</button> : ""}
    {this.state.data.admin === true ? <button onClick={() => this.deleteCase(c.id)}>Delete</button> : ""}
        
       <div class="display-image">
          <img class="image_center" src={this.state.data.image_url}/>
          <h1>{this.state.data.name}</h1>
       </div>

       {/* table */}
    <div id="flex-container">
      
    <div class="result-container">
    <h4>Description</h4>
    <div>{this.state.data.description}</div>
    </div>

    <div class="filter-container">

      <h4>Type</h4>
      <div class="filter-segments">
	        <React.Fragment>
                {this.state.data.type}
	        </React.Fragment>
        </div>
    </div>
    <div class="comment-container">
      <div class="new-comment">

      </div>
      </div>
    </div>    

    <ProductContext.Provider value={this.state.data}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <listing />
                </Route>
                <Route
                  path="/views/:productID"
                  render={props => <views {...props} />}
                ></Route>
              </Switch>
            </Router>
          </ProductContext.Provider>
     </React.Fragment>
  })
}
</div>
)}
}