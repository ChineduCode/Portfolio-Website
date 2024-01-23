import Link from 'next/link'

export default function DashboardPage(){
    return(
        <section>
            <h2>Welcome To My Dashboard Page</h2>
            <div className="links">
                <Link href={'/admin/dashboard/create-new-blog'}>Create new blog</Link>
            </div>
        </section>
    )
}