import React from "react";
import moment from "moment";
import styles from "./../styles/App.css";
import Nav from "./Nav.jsx";
import AllPosts from "./AllPosts.jsx";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}

export default App;
