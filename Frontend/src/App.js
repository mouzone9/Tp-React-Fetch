import React from "react";
import FormularConnection from "./components/formularConnection.js";
import FormularSubscription from "./components/formularSubscription.js";
import Post from "./components/post.js";
import AllPosts from "./components/allPosts.js";
import "./styles/setting.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
    };

    console.log(this.state.user);
  }

  disconnect = () => {
    document.cookie = "username=";
    alert('vous avez bien été déconnecter');
    window.location.reload();
  }

  render() {
    return (
      <div>
        <div className="nav"><h1>Tp React</h1> {
            this.state.user && (
                <p onClick={this.disconnect}>{this.state.user}</p>
            )
        }</div>
        {!this.state.user ? (
          <>
            <FormularConnection />
            <FormularSubscription />
          </>
        ) : (
          <Post />
        )}
        <AllPosts />
      </div>
    );
  }
}
