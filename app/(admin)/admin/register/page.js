'use client'

import Link from 'next/link'
import { useState } from "react"

export default function Register(){
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [data, setData] = useState(null)
    let [error, setError] = useState()

    async function register(e){
        e.preventDefault() 
        
        //error check
        if(!firstname || !lastname || !email || !password || !confirmPassword){
            setError('Fill all the blank spaces')
            setTimeout(()=> error.remove(), 3000)
            return
        }

        if(password.length < 8){
            setError('Password must be more than 7 characters')
            setTimeout(()=> error.remove(), 3000)
            return
        }

        if(confirmPassword !== password){
            setError('Passwords must be the same')
            setTimeout(()=> error.remove(), 3000)
            return
        }


        fetch('http://localhost:3000/api/admin/register', {
            method: 'POST',
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password
            })
        })
        .catch(error => new Error(`Can't post credentials to the server : ${error}`))
        .finally(console.log('submitted'))


        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return(
        <section className="register">
            <h2 className="header">Register</h2>

            <div className="error"> {error} </div>

            <form action="" method="post" onSubmit={register}>
                <div className="control">
                    <input
                        type="text" 
                        name="firstname" 
                        placeholder="First Name"
                        value={firstname} 
                        onChange={(e)=> setFirstname(e.target.value)} 
                    />
                </div>

                <div className="control">
                    <input
                        type="text" 
                        name="lastname"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e)=> setLastname(e.target.value)}
                    />
                </div>

                <div className="control">
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                    />
                </div>

                <div className="control">
                    <input
                        type="password" 
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>

                <div className="control">
                    <input 
                        type="password" 
                        name="confirm_password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e)=> setConfirmPassword(e.target.value)}
                    />
                </div>

                <div className="btn"> <button type="submit">Register</button> </div>

                <div className="login"> Have an account? <Link href={'/admin/login'}>Login</Link> </div>
            </form>
        </section>
    )
}