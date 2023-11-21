'use client'

import Link from 'next/link'
import { useState } from "react"
import { useRouter } from 'next/navigation';

export default function Register(){
    const router = useRouter()
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    let [error, setError] = useState(null)

    async function register(e){
        e.preventDefault() 
        
        //error check
        if(!username|| !email || !password || !confirmPassword){
            await errorDisplay('Fill all blank fields', setError)
            return
        }
        if(password.length < 8){
            await errorDisplay('Password must be more than 7 characters', setError)
            return
        }
        if(confirmPassword !== password){
            await errorDisplay('Passwords do not match', setError)
            return
        }

        const res = await fetch('/api/admin/register', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                username,
                email,
                password,
                confirmPassword
            })
        })

        if(res.ok){
            setUsername('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            router.push('/admin/login')
        }
    }

    async function errorDisplay(error, setErrorMsg){
        setErrorMsg(error)
        await new Promise(resolve => setTimeout(resolve, 5000))
        setErrorMsg('')
    }

    return(
        <section className="register">
            <h2 className="header">Register</h2>
            <small className="error"> {error} </small>
            <form action="" method="post" onSubmit={register}>
                <div className="control">
                    <input
                        type="text" 
                        name="username" 
                        placeholder="Username"
                        value={username} 
                        onChange={(e)=> setUsername(e.target.value)} 
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

                <div className="btn"> <button type="submit" className='register-btn'>Register</button> </div>

                <div className="login"> Have an account? <Link href={'/admin/login'}>Login</Link> </div>
            </form>
        </section>
    )
}