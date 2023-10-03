import Link from "next/link"

export default function Portfolio({portfolios}){
    return(
        <div className="projects">
            {portfolios.map((portfolio, index) =>
                <div className='content' key={index}>
                    <div className="project_design">
                        <div className="project_screenshot"> <img src={portfolio.image} alt='image' /> </div>
                    </div>
                    <div className="title_tools">
                        <h3 className='title'> {portfolio.name} </h3>
                        <div className="tools"> {portfolio.tools} </div>
                    </div>
                    <div className='links'>
                        <Link href={portfolio.live_link} target="_blank" className='live'><button>View Live</button></Link>
                        <Link href={portfolio.github_link} target="_blank" className='github'><button>View Code</button></Link>
                    </div>
                </div>
            )} 
        </div>
    )
}