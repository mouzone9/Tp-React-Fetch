import React from "react";
import { useForm } from "react-hook-form";
import "../styles/formularSubscription.css";
import api from "../api/baseUrl";

export default function FormularSubscription() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    api.post("/register", {
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    }).then((res) => {console.log('envoyé !', res)}).catch(err => console.log('error !', err))

    console.log({
      username: data.username,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <div className="connexion">
          <a className="" href="#">
            <h2>S'inscrire</h2>
          </a>
          <label>FIRSTNAME</label>
          <input
            placeholder="NAME"
            {...register("firstname", { required: true, maxLength: 80 })}
          />
          <label>LASTNAME</label>
          <input
            placeholder="LASTNAME"
            {...register("lastname", { required: true, maxLength: 80 })}
          />
          <label>USERNAME</label>
          <input
            placeholder="USERNAME"
            {...register("username", { required: true, maxLength: 80 })}
          />
          <label>EMAIL</label>
          <input
            placeholder="EMAIL"
            type="mail"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <label>PASSWORD</label>
          <input
            placeholder="PASSWORD"
            {...register("password", { required: true })}
          />
          <div className="spaceBetweenTerms" />
          <input
            className="submit"
            value="inscription"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
}
