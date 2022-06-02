import React        from 'react'
import { useForm }  from "react-hook-form";
import { useState } from 'react';
import '../styles/formular.css'
import baseUrl      from '../api/baseUrl';

function FormularConnection() {
    const { handleSubmit, register } = useForm();
    const [connected, setConnected] = useState(true);
    const onSubmit = data => (
        console.log(data),
        console.log(connected),

        baseUrl.post(`/login_check`, {
            "username": data.username,
            "password": data.password
         })
            .then(res => {
                console.log(res);
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