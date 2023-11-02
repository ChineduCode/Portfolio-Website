
async function getUser(){
    const apiUrl = process.env.API_KEY
    const res = await fetch(`${apiUrl}/api/dashboard`)
    const user = await res.json()
    console.log(user)
    return user;
}

export default async function DashboardPage(){

    return(
        <section>Welcome to Dashboard</section>
    )
}