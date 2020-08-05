import React, { Component } from 'react';
import DisplayCards from './components/DisplayCards'
import axios from 'axios';

// const urls = ['justsml', 'royeradames', 'BigKnell', 'Ladrillo', 'tetondan', 'dustinmyers']

const initialUsers = [{
  avatar_url: '',
  name: '',
  bio: '',
  public_repos: '',
  followersLogin: ['user', 'another user'],

}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: initialUsers,
    }
  }

  componentDidMount() {
    // get user information from Github
    axios.get('https://api.github.com/users/justsml')
      .then(userData => {
        // get user followers from Github
        axios.get('https://api.github.com/users/justsml/following')
          .then(followersData => {
            //get me a copy of the users: value
            const addingFollowersLogin = [userData.data]

            //gives me an array of the the followers id
            const newFollowersLogin = addingFollowersLogin.map(aUser => {
              return aUser.followersLogin = followersData.data.map(aFollower => {
                return aFollower.login
              })
            })
            //add new followersLogin to copy of the uers value
            //because it's a copy you can assign it by calling it
            addingFollowersLogin[0].followersLogin = newFollowersLogin[0]
            // debugger
            //set new state with the new followersLogin as it's value
            this.setState({ users: addingFollowersLogin })
            // debugger
          })
          .catch(error => {
            debugger
          })



        // this.setState({users: [resp.data]})
      })
      .catch(error => {
        debugger
      })


  }
  render() {
    return (
      <DisplayCards users={this.state.users} />
    );
  }
}

export default App;
