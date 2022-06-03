import React        from 'react'
import { useForm }  from "react-hook-form";
import { useState } from 'react';
import '../styles/formular.css'
import instance      from '../api/baseUrl';

function FormularConnection() {
    const { handleSubmit, register } = useForm();
    const [connected, setConnected] = useState(true);
    const onSubmit = data => (
        console.log(data),
        console.log(connected),

        instance.post(`/login_check`, {
            "username": data.username,
            "password": data.password
         })
            .then(() => {
                document.cookie = "username=" + data.username;
                window.location.reload();
            }
        )
        .catch(res => {
            console.log(res)
        })
    );

    const form = () => {
        return <>
            <div className="container-formular">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='connexion'>
                        <a className="" href='#'>
                            <h2>Se connecter</h2>
                        </a>
                        <div className='contact-form'>
                            <label>USERNAME</label>
                            <input 
                                placeholder='username'
                                {...register("username")}
                            />
                            <label>PASSWORD</label>
                            <input
                                placeholder='password'
                                type="password"
                                {...register("password")}
                            />
                            <div className='spaceBetweenTerms' />
                            <input onClick={() => setConnected(!connected)} className='submit' value="connect" type='submit' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    }

    return <>
        {form()}
    </>
}

export default FormularConnection;