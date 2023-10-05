'use client'

import DownloadCV from "../../../components/DownloadCV"; 
import WorkStats from "../../../components/WorkStats";
import Testimonials from '../../../components/Testimonial'
import { useState } from "react";

export default function AboutPage() {

    const educations = [
        {
            id: 1,
            degree: `O'Level`,
            date_started: '2012',
            date_ended: '2018',
            summary: [
                'Completed O’Level examinations through the West Africa Examination Council.',
                'Achieved exceptional grades in subjects including Mathematics, Chemistry, Biology, and Physics.',
                'Received recognition for outstanding performance and received high distinctions in multiple subjects.',
            ]
        },
        {
            id: 2,
            degree: `A'Level`,
            date_started: '2018',
            date_ended: '2019',
            summary: [
                'Pursued A’Level studies with a focus on scientific disciplines.',
                'Completed examinations under the Joint University Preliminary Examinations Board.',
                'Excelled in subjects such as Chemistry, Biology, and Mathematics.',
                'Attained top grades and received accolades for exceptional achievements.',
            ]
        },
        {
            id: 3,
            degree: 'Bachelor of Pharmacy',
            date_started: '2020',
            date_ended: 'Present',
            summary: [
                'Bachelor of Pharmacy degree from Anambra state university.',
                'Completed a comprehensive program covering various aspects of pharmacy and healthcare.',
                'Engaged in coursework that included pharmaceutical sciences, pharmacology, medicinal chemistry, and clinical pharmacy.',
                'Demonstrated strong academic performance and consistently achieved high grades.',
                'Participated in practical training and internships to gain hands-on experience in pharmacy practice.',
                'Actively involved in football game.',
            ]
        }
    ]

    const experiences = [
        {
            id: 1,
            position: 'Full Stack Web Developer',
            company: 'JohnLeo Web Development',
            function: [
                'Leveraged mastery of HTML, CSS, and JavaScript to build top- quality code for diverse projects.',
                'Created and implemented highly complex contingency plans in preparation for website outages.',
                'Developed secure and reliable web-based solutions to meet customer requirements.',
                'Completed programming projects that compiled with existing coding standards and design styles.',
                'Used scripts and automated processes to improve website performance.',
                'Created clean, well-documented custom code and updates.',
                'Implemented search engine optimization techniques to enhance website visibility.',
                'Utilized APIs to provide data to web applications.',
                'Developed custom websites to meet individual client needs.',
                'Debugged websites to identify and resolve potential problems.'
            ],
            date_started: '2021',
            date_ended: 'Present'
        },
        {
            id: 2,
            position: 'Cyber Cafe Attendant',
            company: 'Juticor Cyber Cafe',
            function: [
                'Entered commands and observed system functioning to verify correct operation and detect error.',
                'Developed training materials and procedures, and train users in proper use of hardware and software.', 
                'Maintained records of daily data communication transaction, problems, and remedial actions taken and installation activities.',
            ],
            date_started: '2020',
            date_ended: '2022'
        },
        {
            id: 3,
            position: 'Porter',
            company: 'Immaculate Specialist Hospital',
            function: [
                'Checked trash receptacles to empty as needed.',
                'Distribute oxygen cylinders to the hospital wards as directed by the doctor or management.',
                'Carry patients to the required wards.',
                'Takes patients in and out of the theatre after surgery with wheeled-chair or stretcher'
            ],
            date_started: '2019',
            date_ended: '2020'
        }
    ]

    const [activeEdu, setActiveEdu] = useState(true)
    const [activeExp, setActiveExp] = useState(false)
    //Add or Remove Active Class
    const toggleActive = (e)=> {
        const activeBar = e.target
        console.log(activeBar)
    }

    //toggle between experience and education
    const toggleExpEdu = (e)=>{
        const id = e.target.id
        if(id === 'education'){
            setActiveEdu(true)
            setActiveExp(false)
        }else if(id === 'experience'){
            setActiveEdu(false)
            setActiveExp(true)
        }
    }


    return (
        <section className="about">
            <section className="hero">
                <div className="header">
                    <h1 className="text">About Me</h1>
                    <div className="name">ChineduCode</div>
                </div>

                <div className="downloadcv_introduction">
                    <DownloadCV />
                    <div className="introduction">
                        <h1 className="name">I'm Chinedu Nnaemeka</h1>
                        <div className="skill">Web Developer</div>
                        <div className="description">
                            Reliable Web Developer with excellent communication, time management, and computer skills. A driven and detail-oriented individual with a desire
                            to use analytical and problem-solving
                        </div>
                    </div>
                </div>
            </section>

            <section className="experience_education" onClick={toggleExpEdu}>
                <div className="education_experience_bars">
                    <h2 className={`education_bar ${activeEdu ? 'active' : 'education_bar'}`} id="education">Education</h2>
                    <h2 className={`experience_bar ${activeExp ? 'active' : 'experience'}`} id="experience">Experience</h2>
                </div>
                
                <div className="education_experience_contents">
                    <div className={`education_content ${activeEdu ? 'active' : 'education_content'}`} id="educations">
                        {educations.map((education, index )=>
                            <div className="education" key={index}>
                                <div className="date_started_date_ended">
                                    <span className="date_started">{education.date_started}</span> - <span className="date_ended">{education.date_ended}</span>
                                </div>
                                <div className="course_detail">
                                    <h3 className="course_certificate">{education.degree}:</h3>
                                    <ul className="summary">{education.summary.map(s => <li key={s.length}>{s}</li>)}</ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={`experience_content ${activeExp ? 'active' : 'experience_content'}`} id="experiences">
                        {experiences.map(experience =>
                            <div className="experience" key={experience.id}>
                                <div className="date_started_date_ended">
                                    <span className="date_started">{experience.date_started}</span> - <span className="date_ended">{experience.date_ended}</span>
                                </div>
                                <div className="experience_detail">
                                    <h3 className="position">{experience.position}</h3>
                                    <div className="company">{experience.company}</div>
                                    <ul className="experiences">
                                        {experience.function.map(exp => <li className="exp" key={exp.concat('c')}>{exp}</li> )} 
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <WorkStats />

            <Testimonials />
            
        </section>
    );
} 
