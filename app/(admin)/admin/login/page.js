'use client'

import { useState } from "react"
import Link from "next/link"

export default function Login(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let [error, setError] = useState(false)
    let [success, setSuccess] = useState(false)
    let [errorMsg, setErrorMsg] = useState('')
    
    async function handleLogin(e){
        e.preventDefault()
        
        if(!email || !password){
            setErrorMsg('Fill all blank fields')
            return
        }

        await fetch('/api/admin/login', {
            method : 'POST',
            body: JSON.stringify({email, password})
        })
    }

    return( 
        <section className="login"> 
            <h2 className="header">Login</h2>
            <div className="error">{errorMsg}</div>
            <form action="" className="login" onSubmit={handleLogin}>
                <div className='control'>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email"
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

                <button type="submit">Login</button>

                <div className="register_link">
                    Don't have an account ? <Link href={'/admin/register'}>Register</Link>
                </div>
            </form>
        </section>
    )
} 