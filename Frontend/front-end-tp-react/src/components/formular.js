import React        from 'react'
import { useForm }  from "react-hook-form";
import { useState } from 'react';
import '../styles/formular.css'

function Formular() {
    const { handleSubmit, register } = useForm();
    const onSubmit = data => console.log(data);

    return <>
        <div className="container">
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
                            <input className='submit' value="connect" type='submit' />
                    </div>
                    <div className='connexion'>
                            <a className="" href='#'>
                                <h2>S'inscrire</h2>
                            </a>
                            <label>NAME</label>
                            <input 
                                placeholder='NAME'
                                {...register("name")}
                            />
                            <label>FRISTNAME</label>
                            <input
                                placeholder='FIRSTNAME'
                                {...register("firstname")}
                            />
                            <label>EMAIL</label>
                            <input
                                placeholder='EMAIL'
                                {...register("email")}
                            />
                            <label>PASSWO</label>
                            <input
                                placeholder='PASSWORD'
                                {...register("password")}
                            />
                            <div className='spaceBetweenTerms' />
                            <input className='submit' value="inscription" type='submit' />
                        </div>
                    </div>
                </form>
            </div>
        </>
}

export default Formular;