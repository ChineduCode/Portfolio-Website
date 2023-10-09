import Link from 'next/link'

export default function AdminWelcomePage(){
    return(
        <section className="welcome">
            <div className="welcome-text">Welcome To Admin's Page</div>
            <ul className="register-login-links">
                <li className='login-link'> <Link href={'/admin/login'}>Login</Link> </li>
                <li className='register-link'> <Link href={'/admin/register'}>Register</Link> </li>
            </ul>
        </section>
    )
}