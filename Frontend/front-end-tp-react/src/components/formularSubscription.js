import React        from 'react'
import { useForm }  from "react-hook-form";
import { useState } from 'react';
import '../styles/formularSubscription.css'

function FormularSubscription() {
    const { handleSubmit, register } = useForm();
    const [connected, setConnected] = useState(true);
    const onSubmit = data => (
        console.log(data)
    );

    const form = () => {
        if (connected) {
            return <>
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                            <label>PASSWORD</label>
                            <input
                                placeholder='PASSWORD'
                                {...register("password")}
                            />
                            <label>PASSWORD CONFRIM</label>
                            <input
                                placeholder='PASSWORD CONFIRM'
                                {...register("passwordConfirm")}
                            />
                            <div className='spaceBetweenTerms' />
                            <input onClick={() => setConnected(!connected)} className='submit' value="inscription" type='submit' />
                        </div>
                    </form>
                </div>
            </>
        } else {
            return;
        }
    }

    return <>
        {form()}
    </>
}

export default FormularSubscription