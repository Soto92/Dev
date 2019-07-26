import React from 'react';
import axios from 'axios';
const API_URL = 'https://reqres.in';

class CenterTb extends React.Component {
  state = {
    users: [],
    isOpen: false
  }
  componentDidMount() {
    const url = `${API_URL}/api/users?per_page=7`;
    axios.get(url).then(response => response.data )
    .then(({ data }) => {
      this.setState({ users: data });
      // console.log("data", this.state.users);
     })
  }


deleteUser (e, id){

  axios.delete(`https://reqres.in/api/users/${id}`)
  .then(response => response.data)
  .then(({ data }) => {
    this.setState({ users: data });
    console.log(this.state.users);
   })
  
}

updateUser (e, id){

   e.preventDefault();
  let user = {
      id: this.state.id,
      email:this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
  }
  axios.put(`https://reqres.in/api/users/${id}`, user)
  .then(response =>response.data)
  .then(({ data }) => {
    this.setState({ users: data });
    console.log(this.state.users);
   })
}

render() {
    return (
      <div className="areacenter">
      <div className="title0">
      Data Table With Full Features
      </div>
      <div className="divtitles">
        <div className="title01">
          Show <input id="entriesBar" type="text"></input>entries
        </div>
        <div className= "title02">
          Search <input id="search02" type="text"></input>
        </div>
      </div>
      <div>
        <table className="tableMain">
          <tr><th>Id </th> <th> Name </th> <th> Last name </th>
          <th>Email</th> <th>Phone</th><th>Info</th><th>Action</th></tr>
          {this.state.users && this.state.users.map(user =>( 
          <tr>
          <td>{user.id}</td><td>{user.first_name}</td><td>{user.last_name}</td> <td>{user.email}</td> <td>999 9999</td><td></td>
          <td> 
          <button onClick={(e) => this.updateUser(e, user.id)} className="muted-button">Update |</button>
          <button onClick={(e) => this.deleteUser(e, user.id)} className="muted-button">Delete</button> 
          </td>
          </tr>
          ))}
        </table>
      </div>
     </div>
    );
  }
}
export default CenterTb;