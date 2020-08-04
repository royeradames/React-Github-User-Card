import React, { Component } from 'react';
import DisplayCards from './components/DisplayCards'
import Axios from 'axios';

const urls = ['justsml', 'royeradames', 'BigKnell', 'Ladrillo', 'tetondan', 'dustinmyers']

const initialUsers = [{
  avatar_url: '',
  name: '',
  bio: '',
  public_repos: '',
  followerslogin: ['user', 'another user'],
  
}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      users: initialUsers, 
      firstRender: false
    }
  }

  componentDidMount() {
    Axios.get('https://api.github.com/users/justsml')
    .then(resp => {
      this.setState({users: resp.data})

      if(!this.state.firstRender){
        this.setState({firstRender: true})
      }
      debugger
    })
    .catch( error => {
      debugger
    })
  }
  render() { 
    return ( 
      <DisplayCards users={this.state.users} firstRender={this.state.firstRender}/>
     );
  }
}
 
export default App;
