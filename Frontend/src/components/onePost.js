import React from "react";
import "../styles/post.css";

export default class OnePost extends React.Component {
  constructor(props) {
    super(props);
    this.titre = props.titre;
    this.content = props.content;
    this.author = props.author;
  }

  render() {
    return (
      <div className="container-post post">
        <div className="callout secondary">
          <h4 className="leave-comment">{this.titre}</h4>
          <p>{this.author}</p>
          <p>{this.content}</p>
        </div>
      </div>
    );
  }
}
