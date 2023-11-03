'use client'

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let [errorMsg, setErrorMsg] = useState('')

    const router = useRouter()
    
    async function handleLogin(e){
        e.preventDefault()
        
        if(!username || !password){
            setErrorMsg('Fill all blank fields')
            return
        }
        
        try {
            const res = await fetch('/api/admin/login', {
                method : 'POST',
                headers: {'Content-type' : 'Application.json'},
                body: JSON.stringify({
                    username, 
                    password
                })
            })

            if(res.ok){
                setUsername('')
                setPassword('')
                router.push('/admin/dashboard')
            }else{
                setErrorMsg('Invalid credentials')
                return new Response(errorMsg, {
                    status: 401
                })
            }
            
        } catch (error) {
            console.error(error)
        }
    }

    return( 
        <section className="login"> 
            <h2 className="header">Login</h2>
            <div className="error">{errorMsg}</div>
            <form action="" className="login" onSubmit={handleLogin}>
                <div className='control'>
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
                        type="password" 
                        name="password" 
                        placeholder="Password"
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="login-btn">Login</button>

                <div className="register_link">
                    Don't have an account ? <Link href={'/admin/register'}>Register</Link>
                </div>
            </form>
        </section>
    )
} 