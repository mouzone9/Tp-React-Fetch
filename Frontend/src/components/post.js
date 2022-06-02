import React from "react";
import { useForm } from "react-hook-form";
import instance from "../api/baseUrl";
import "../styles/post.css";

export default function Post() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log({
      title: data.title,
      content: data.content,
    });

    instance
      .post("/posts", {
        title: data.title,
        content: data.content,
      })
      .then((res) => {
        console.log("envoyé !", res);
        window.location.reload();
      })
      .catch((err) => console.log("error !", err));
  };

  return (
    <>
      <div className="container-post post">
        <div className="callout secondary">
          <h4 className="leave-comment">Add a post</h4>
          <form
            onSubmit={handleSubmit((data) => onSubmit(data))}
            className="post-edit"
          >
            <label>Titre</label>
            <input
              placeholder="Titre"
              {...register("title", { required: true, maxLength: 100 })}
            />
            <label>Content</label>
            <input
              placeholder="Content"
              {...register("content", { required: true, maxLength: 244 })}
            />
            <button>Add comment</button>
          </form>
        </div>
      </div>
    </>
  );
}
