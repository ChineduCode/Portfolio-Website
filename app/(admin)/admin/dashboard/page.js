import Link from "next/link"

export default function Dashboard(){
    return(
        <main className="dashboard">
            <h1>Welcome, ChineduCode</h1>

            <section className="create_new">
                <Link href={'/admin/dashboard/create_new_blog'}>Create new blog...</Link>
                <Link href={'/admin/dashboard/add_new_portfolio'}>Add new portfolio...</Link>
            </section>
        </main>
    )
}