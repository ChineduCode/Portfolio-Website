import Link from "next/link"

export default function Welcome(){
    return(
        <section className="welcome">
            <h2 className="header">Welcome</h2>
            <div className="register_login">
                <Link href={'/admin/register'} className="register_link">
                    <button>Register</button>
                </Link>
                <Link href={'/admin/login'} className="login_link">
                    <button>Login</button>
                </Link>
            </div>
        </section>
    )
}