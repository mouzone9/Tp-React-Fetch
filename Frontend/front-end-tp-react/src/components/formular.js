import React       from 'react'
import { useForm } from "react-hook-form";
import '../styles/formular.css'

function Formular() {
    const { handleSubmit, register } = useForm();
    const onSubmit = data => console.log(data);

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container">
                <div className="menu">
                    <a className="" href='#'>
                        <h2>Se connecter</h2>
                    </a>
                    <div className='connexion'>
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
                    </div>
                </div>
            </div>
        </form>
    </>
}

export default Formular;