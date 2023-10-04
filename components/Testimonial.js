'use client'
import {FaQuoteLeft, FaAnglesLeft, FaAnglesRight} from 'react-icons/fa6'
import { useRef } from 'react'

const Testimonials = ()=>{

    const testimonials = [
        {
            text: 'Chinedu is a web development genius! His technical prowess and attention to detail are simply unmatched. He crafted a visually stunning website for me that not only exceeded my expectations but also wowed my clients.',
            name: 'John S.',
        },
        {
            text: 'Working with Chinedu was an absolute game-changer for my online presence. His web development skills are unparalleled, and he transformed my vision into a functional masterpiece.',
            name: 'Sarah L.',
        },
        {
            text: 'I had the pleasure of collaborating with Chinedu on a web development project, and I am in awe of his expertise. His technical acumen and attention to detail are truly remarkable.',
            name: 'Mark R.',
        },
        {
            text: 'Chinedu is an absolute rockstar in the world of web development! His passion for crafting flawless websites is evident in every line of code he write. The website he built for me is a true work of art, with seamless navigation, stunning visuals, and impeccable performance.',
            name: 'Emily G.',
        },
        {
            text: 'Collaborating with Chinedu as a web developer was an extraordinary experience. His technical expertise, coupled with His innovative approach, resulted in a website that surpasses all expectations. ',
            name: 'David M.',
        },
        {
            text: 'From the moment I engaged Chinedu for web development, I knew I made the right choice. His professionalism and attention to detail are truly exceptional. The website he crafted for me is a seamless blend of creativity and functionality.',
            name: 'Lisa T.',
        }
    ]

    const myRef = useRef(null)

    const handleScroll = (e)=>{
        const icon = e.target
        const container = myRef.current

        if(icon.className === 'next_icon'){
            const testimonial = icon.parentElement.previousSibling
            testimonial.scroll()
        }else if(icon.className === 'previous_icon'){
            console.log(container+ ' previous') 
        }
    }

    
    return(
        <section className="testimonial_container" onClick={handleScroll}>
            <div className="header">
                <div className="heading">|| <span>Testimonials</span></div>
                <h2 className="sub_heading">Satisfied Clients Say</h2>
            </div>

            <div className="testimonials" ref={myRef}>
                {testimonials.map((testimonial, index) =>
                    <div className={`testimonial ${testimonial.active ? 'active' : 'testimonial'}` } key={index}>
                        <FaQuoteLeft size={40}/>
                        <div className="text">{testimonial.text}</div>
                        <big>{testimonial.name}</big>
                    </div> 
                )}
            </div>

            <div className="next_previous_icons">
                <span className='previous_icon'> <FaAnglesLeft /> </span>
                <span className='next_icon' > <FaAnglesRight/> </span>
            </div>
        </section>
    )
}

export default Testimonials;