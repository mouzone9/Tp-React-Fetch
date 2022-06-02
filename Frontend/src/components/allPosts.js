import React from "react";
import OnePost from "./onePost";
import instance from "../api/baseUrl";
import "../styles/post.css";

export default class AllPosts extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    instance.get("/posts").then((res) => {
      const posts = res.data;
      console.log(posts);
      this.setState({ posts });
    })
  }

  render() {
    return (
      <div className="container-post post">
        {this.state.posts.map((post) => (
          <OnePost key={post.id} titre={post.title} content={post.content} author={post.author} />
        ))}
      </div>
    );
  }
}
