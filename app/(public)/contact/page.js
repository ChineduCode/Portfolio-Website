'use client'

import { useState } from "react";
import SocialMediaPlatforms from "../../../components/SocialMedia";

async function postMessage(newMessage){
    await fetch('api/contact', {
        method: 'POST',
        body: JSON.stringify(newMessage) 
    })
}

export default function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(null)

    //handle form submit
    const handleFormSubmit = async (e)=>{
        e.preventDefault()

        if(!name || !email || !subject || !message){
            return
        } 

        await postMessage({
            name, 
            email, 
            subject, 
            message
        })

        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }
    
    return ( 
        <section className="contact">
            <section className="header">
                <h2 className="heading">Contact Me</h2>
                <div className="sub_heading">Contact</div> 
            </section>

            <section className="hero">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63470.9191197378!2d6.779047857567954!3d6.1397777160627625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104393bed6cb93b7%3A0xd75544d3750782f7!2sOnitsha%2C%20Anambra!5e0!3m2!1sen!2sng!4v1691724417452!5m2!1sen!2sng" 
                    allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                
                <div className="contact_me">
                    <div className="message_me">
                        <div className="header">|| <span>Get In Touch</span></div>
                        <h3 className="sub_header">Contact me If you have any project or need help</h3>
                        <p className="text">We will get back to you as soon as possible !!!</p>
                        <div className="error">
                            <small>{error}</small>
                        </div>
                        <form action="" className="message" onSubmit={handleFormSubmit}>
                            <input type="text" name="name" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                            <input type="email" name="email" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            <input type="text" name="subject" placeholder="Subject" value={subject} onChange={(e)=> setSubject(e.target.value)}/>
                            <textarea name="message" cols="30" rows="10" placeholder="Message" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
                            <button type="submit">SEND</button>
                        </form>
                    </div>

                    <div className="contact_details_social_media_platforms">
                        <div className="contact_details">
                            <div className="email contact">
                                <div className="text">Email:</div>
                                <div className="detail">chineducode@gmail.com</div>
                            </div>
                            <div className="website contact">
                                <div className="text">Website:</div>
                                <div className="detail">www.chineducode.com</div>
                            </div>
                            <div className="address contact">
                                <div className="text">Address:</div>
                                <div className="detail">Onitsha, Anambra State</div>
                            </div>
                        </div>

                        <div className="social_media_platforms">
                            <h2 className="header">Follow Me</h2>
                            <SocialMediaPlatforms />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}