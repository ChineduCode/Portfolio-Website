import WorkStats from '../../components/WorkStats' 
import HireMe from '@/components/Hire_Me'
import DownloadCV from '../../components/DownloadCV'
import Testimonials from '../../components/Testimonial'
import Projects from '@/components/Projects'
import Link from 'next/link'

export default async function HomePage(){
  
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
        
        <Projects /> {/*latest projects */}

        <Link href={'/portfolio'} className='view_more'>View more ...</Link>
      </section>

      <Testimonials />  {/* Testimonial component */} 

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
