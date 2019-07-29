import React from 'react';
import axios from 'axios';
const API_URL = 'https://reqres.in';
let dataLocal;
class CenterTb extends React.Component {
  state = {
    users: [],
    isOpen: false
  }
  componentDidMount() {
    const url = `${API_URL}/api/users?per_page=7`;
    axios.get(url)
    .then(response => response.data )
    .then(({ data }) => {
      this.setState({ users: data });
       dataLocal = data;
       // console.log("data:", dataLocal);
     })
  }

deleteUser (id){
  let filteredArray = dataLocal.filter(item => item.id !== id)
  dataLocal = filteredArray;
  this.setState({users: dataLocal});
  console.log(dataLocal);
}

updateUser (id){
  const filteredArray = dataLocal.filter(item => item.id === id);
  filteredArray[0].last_name='Fulano';
  filteredArray[0].first_name='Stark';
  filteredArray[0].email='email@default.br';
  console.log(dataLocal);
  this.setState({users: dataLocal});
}

render() {
    return (
      <div className="areacenter">
      <div className="title0">
      Data Table With Full Features
      </div>
      <div className="divtitles">
        <div className="title01">
          Show <input id="entriesBar" type="text" ></input>entries
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
          <button onClick={(e) => this.updateUser(user.id)} className="muted-button">Update |</button>
          <button onClick={(e) => this.deleteUser(user.id)} className="muted-button">Delete</button> 
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