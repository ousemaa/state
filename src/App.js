import React, { Component } from "react";
import "./App.css";
export class App extends Component {
  state = {
    personne: {
      fullname: "oussama",
      bio: "",
      profission: "web developer ",
      imgs: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    },
    shows: true,
  };
  details = () => {
    this.setState({
      ...this.state,
      shows: !this.state.shows,
    });
  };
  render() {
    return (
      <div className="card">
        {this.state.shows && (
          <>
            <div className="card">
              <img src={this.state.personne.imgs} alt="logo" />
              <h1>{this.state.personne.fullname}</h1>
              <h5>{this.state.personne.bio}</h5>
              <h3>{this.state.personne.profission}</h3>
            </div>
          </>
        )}
        <button onClick={this.details}> show details </button>
      </div>
    );
  }
}

export default App;
