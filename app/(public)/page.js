import WorkStats from '../../components/WorkStats'
import HireMe from '@/components/Hire_Me'
import DownloadCV from '../../components/DownloadCV'
import Testimonials from '../../components/Testimonial'
import Link from 'next/link'
import { NextResponse } from 'next/server'

// async function getPortfolio(){
//   const res = await fetch(`http://localhost:3000/api/portfolio`, {
//     next: { revalidate : 10 }
//   })
  
//   if(!res.ok){
//     return NextResponse.json('Failed to fetch portfolios')
//   }

//   return res.json();
// }

const Home = async () => {
  
  let skills = [
    {
      name : 'HTML',
      percentage: '95%'
    },
    {
      name : 'CSS',
      percentage: '80%'
    },
    {
      name : 'JAVASCRIPT',
      percentage: '85%'
    },
    {
      name : 'REACT JS',
      percentage: '87%'
    },
    {
      name : 'NEXT JS',
      percentage: '80%'
    },
    {
      name : 'NODE JS & EXPRESS JS',
      percentage: '85%'
    },
    {
      name : 'MONGODB',
      percentage: '94%'
    },
  ]

  //fetch portfolio
  const res = await fetch(`http://localhost:3000/api/portfolio`, {
    next: { revalidate : 10 }
  })

  if(!res.ok){
    NextResponse.json('error fetching projects')
  }
  
  const portfolios = await res.json()
  const minimalizedPortfolio = portfolios.slice(0,2)

  return (
    <section className='home'>
      <section className="hero">
        <div className="profile-picture"> <img src="profile_pics.png" alt="profile picture" /> </div>

        <div className="introduction">
          <div className="name_content">Hello! I'm <h1 className="name">Chinedu Nnaemeka</h1> </div>
          <div className="work_description">
            Reliable Web Developer with excellent communication, time management, and computer skills. A driven and detail-oriented individual with a desire
            to use analytical and problem-solving 
          </div>
          <HireMe />
        </div>
      </section>
      
      {/* skills */}
      <section className="skills">
        <div className="top">
          <div className="header"> || <span className="text">Special Skills</span> </div>
          <h2 className="sub-header"> My Special Skill Fields Here </h2>
          <DownloadCV />
        </div>

        <div className="skills_container">
          {skills.map((skill, index) =>
            <div className="skill" key={index}>
              <span className="name"> {skill.name} </span>
              <span className="percentage"> {skill.percentage} </span>
              <div className="range"> 
                <div className="range_percentage" style={{width: skill.percentage}}></div> 
              </div>
            </div>
          )}
        </div>
      </section>
      
      <WorkStats /> {/* work stats component */}

      {/* Portfolio */}
      <section className="home_portfolio">
        <div className="header">
          <div className="heading">
            <div className="title">
              <span className="slash">|| <span className="text">Awesome Portfolio</span> </span>
            </div>
            <h2 className="sub_heading">My Complete Projects</h2>
          </div>
        </div>

        <div className="portfolios">
          {minimalizedPortfolio.map((portfolio, index) => 
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

        <Link href={'/portfolio'} className='view_more'>View more ...</Link>
      </section>

      <Testimonials />  {/* Testimonials component */}

      {/* blog */}
      <section className="home_blog">
        <div className="header">
          <div className="heading">|| <span>Blog Post</span></div>
          <h2 className="sub_heading">Latest Tips & Tricks</h2>
        </div>
        <div className="content">No blog post yet !!!</div>
      </section>
    </section>
  ) 
} 

export default Home;