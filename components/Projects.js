import Link from "next/link"

async function fetchProjects(){
    const res = await fetch('http://localhost:3000/api/portfolio', {
        next: {revalidate: 10}
    })
    const projects = await res.json()
    return await projects.slice(0,2);
}

export default async function Projects(){
    //fetch portfolio
    const projects = await fetchProjects()

    return(
        <div className="portfolios">
            {projects.map((portfolio, index) => 
                <div className='content' key={index}>
                    <div className="project_design">
                        <div className="project_screenshot"> <img src={portfolio.image} alt='image' /> </div>
                    </div>
                    <div className="title_tools">
                        <h3 className='title'> {portfolio.name} </h3>
                        <div className="tools"> {portfolio.tools} </div>
                    </div>
                    <div className='links'>
                        <Link href={portfolio.live_link} target='_blank' className='live'><button>View Live</button></Link>
                        <Link href={portfolio.github_link} target='_blank' className='github'><button>View Code</button></Link>
                    </div>
                </div> 
            )}
        </div>
    )

}