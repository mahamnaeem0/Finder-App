import React from "react";
import Navbar from "./Component/Layout/Navbar";
import'./App.css';
import User from "./Component/Layout/Users/User";
import axios from "axios";

class App extends React.Component{
  state={
    users:[],
    loading: false,
  }

async componentDidMount(){
  this.setState({loading: true});
  const url="https://api.github.com/users";
  const res= await axios.get(url)
  console.log(res.data);
  this.setState({users: res.data, loading:false})
}

  render(){

    return(
      <div>
        <Navbar/>
        <div className="container">
        <User users={this.state.users} loading={this.state.loading}/>
      </div>
      </div>
    )
  }
}
export default App;