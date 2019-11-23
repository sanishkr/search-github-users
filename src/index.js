import React, { Component } from "react";
import ReactDOM from "react-dom";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import UsersList from "./UsersList";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      users: []
    };
  }
  searchUsers = async () => {
    console.log("searching users for:", this.state.username);
    const { username } = this.state;
    username &&
      (await fetch(
        `https://github-users-api.herokuapp.com/search/users/${username}`
      )
        .then(response => response.json())
        .then(jsonData => {
          console.log(jsonData);
          this.setState({
            users: jsonData.data
          });
        })
        .catch(error => {
          console.error(error);
        }));
    // this.setState({
    //   users: [
    //     {
    //       avatar_url: "https://via.placeholder.com/100",
    //       type: "dsfsgs",
    //       public_repos: 3,
    //       followers: 5
    //     }
    //   ]
    // });
  };
  render() {
    return (
      <div className="App mx-2">
        <h1>Github Users</h1>
        <InputGroup className="px-4">
          <Input
            onChange={e => this.setState({ username: e.target.value })}
            placeholder="type keyword here..."
          />
          <InputGroupAddon addonType="append">
            <Button onClick={this.searchUsers} color="secondary">
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
